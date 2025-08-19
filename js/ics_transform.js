//
// ics_transform.js
//


import ical from 'ical.js';
import { icsObject } from './icsObject.js';
// note: package.json needs "type":"module" for ES6 imports


//
// from ical.js wiki:
//   https://github.com/mozilla-comm/ical.js/wiki
//
// ["vcalendar",
//   [
//     ["calscale", {}, "text", "GREGORIAN"],
//     ["prodid", {}, "text", "-//Example Inc.//Example Calendar//EN"],
//     ["version", {}, "text", "2.0"]
//   ],
//   [
//     ["vevent",
//       [
//         ["dtstamp", {}, "date-time", "2008-02-05T19:12:24Z"],
//         ["dtstart", {}, "date", "2008-10-06"],
//         ["summary", {}, "text", "Planning meeting"],
//         ["uid", {}, "text", "4088E990AD89CB3DBB484909"]
//       ],
//       []
//     ]
//   ]
// ]
//


function getValue(vevent, propertyName)
{
    const ok = vevent.length === 3 &&
               vevent[0] === 'vevent';

    if (!ok) return "";

    let propertyList = vevent[1];

    for (const property of propertyList)
    {
        const [name, unknown, type, value] = property;
        if (name === propertyName) return value;
    }

    return "";
}


function replaceValues(vevent, replacements)
{
    let propertyList = JSON.parse(JSON.stringify(vevent[1])); // deep copy

    // hack: keep track of fields we don't replace
    let leftovers = Object.keys(replacements);

    for (let i=0; i<propertyList.length; i++)
    {
        const [name, unknown, type, value] = propertyList[i];
        if (name in replacements) 
        {
            propertyList[i] = [name, unknown, type, replacements[name]];
        }

        // remove index from leftovers list
        const index = leftovers.indexOf(name);
        if (index > -1) {
          leftovers.splice(index, 1);
        }
    }

    for (const name of leftovers) {
        propertyList.push([name, {}, 'text', replacements[name]]);
    }

    return [vevent[0], propertyList, vevent[2]];
}


function searchReplace(vevent, schedule, startTime = "0", endTime = "2100")
{
    const period = getValue(vevent, "summary");
    const time = getValue(vevent, "dtstart");

    if (!period) // e.g. timezone
    {
        return vevent;
    }
    else if (period in schedule &&
             startTime <= time && 
             time <= endTime)
    {
        return replaceValues(vevent, schedule[period]);
    }
    else
    {
        return null;
    }
}


function transform(icsObject, transformation)
{
    // sanity check and unpack object

    if (icsObject.length !== 3 || !icsObject[0].startsWith('vcalendar'))
    {
        console.log("Something's wrong!");
        return;
    }

    const [vcalendar, header, eventArray] = icsObject;

    // transform the event array

    let outputEventArray = eventArray.map(transformation);
    outputEventArray = outputEventArray.filter(item => item != null);

    let outputData = [vcalendar, header, outputEventArray];

    return outputData;

}


export function doTransformation(schedule, startTime, endTime)
{
    try 
    {
        const transformation = 
            vevent => searchReplace(vevent, schedule, startTime, endTime);

        const outputObject = transform(icsObject, transformation);
        return ical.stringify(outputObject);
    }        
    catch (err) 
    {
        console.error(err.message)
    }
}


