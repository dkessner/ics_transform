//
// ics_transform.js
//


import ical from 'ical.js';
import { icsObject } from './icsObject.js';
// note: package.json needs "type":"module" for ES6 imports


function getSummary(vevent)
{
    const ok = vevent.length === 3 &&
               vevent[0] === 'vevent';

    if (!ok) return "";

    let propertyList = vevent[1];

    for (const property of propertyList)
    {
        const [name, unknown, type, value] = property;
        if (name === "summary") return value;
    }

    return "";
}


function replaceSummary(vevent, search, replace)
{
    let propertyList = JSON.parse(JSON.stringify(vevent[1])); // deep copy

    for (let i=0; i<propertyList.length; i++)
    {
        const [name, unknown, type, value] = propertyList[i];
        if (name === "summary" && value === search) 
        {
            propertyList[i] = [name, unknown, type, replace];
        }
    }

    return [vevent[0], propertyList, vevent[2]];
}


function searchReplace(vevent, schedule)
{
    const period = getSummary(vevent);
    
    if (period in schedule)
    {
        return replaceSummary(vevent, period, schedule[period]);
    }
    else
        return null;
}



function transform(icsObject, transformation)
{
    // sanity check and unpack object

    if (icsObject.length !== 3 || icsObject[0] !== 'vcalendar')
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


const myschedule = 
{
    C: "C CS Projects",
    D: "D APCS"
};


function testTransform(vevent)
{
    return searchReplace(vevent, myschedule);
}


function doTransformation()
{
    try 
    {
        const outputObject = transform(icsObject, testTransform);
        if (outputObject)
        {
            console.log(outputObject);
            console.log(ical.stringify(outputObject));
        }
    }        
    catch (err) 
    {
        console.error(err.message)
    }
}


doTransformation();




