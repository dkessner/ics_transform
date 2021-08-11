


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


function testTransform(vevent)
{
    const summary = getSummary(vevent);
    
    if (summary === "D")
        return vevent;
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
            console.log(ical.stringify(outputObject));
    }        
    catch (err) 
    {
        console.error(err.message)
    }
}


doTransformation();


