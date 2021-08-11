


// needs "type" : "module" in package.json for ES6 imports

import ical from 'ical.js';
import { icsObject } from './icsObject.js';

/*
// if not type:module, use require()
let ical = require("ical.js");
let fs = require("fs");
*/


let filename = "rotation.ics";


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


function testTransform(vevent)
{
    const summary = getSummary(vevent);
    
    if (summary === "D")
    {
        return replaceSummary(vevent, "D", "D goo");
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


function doTransformation()
{
    try 
    {
        const outputObject = transform(icsObject, testTransform);
        if (outputObject)
        {
            console.log(outputObject);
            let s = ical.stringify(outputObject);
            //let s = ical.stringify(icsObject);
            console.log(s);
            //console.log(ical.stringify(outputObject));
        }
    }        
    catch (err) 
    {
        console.error(err.message)
    }
}


doTransformation();




