

/*
// if "type" : "module" in package.json, can use ES6 imports
import ical from 'ical.js';
import { readFileSync } from 'fs';
*/


// if not type:module, use require()
let ical = require("ical.js");
let fs = require("fs");


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


function transform(ics)
{
    let data;

    // parse the ical data

    try 
    {
        data = ical.parse(ics);
    }
    catch (err) 
    {
        console.error("Error in ical.parse():" + err.message)
        return;
    }

    if (data.length !== 3 || data[0] !== 'vcalendar')
    {
        console.log("Something's wrong!");
        return;
    }

    const [vcalendar, header, eventArray] = data;

    // transform the event array

    let outputEventArray = eventArray.map(testTransform);
    outputEventArray = outputEventArray.filter(item => item != null);

    let outputData = [vcalendar, header, outputEventArray];

    return ical.stringify(outputData);
}


function transformFile(filename)
{
    try 
    {
        const ics = fs.readFileSync(filename, 'utf8')
        const output = transform(ics);
        if (output) console.log(output);
    }        
    catch (err) 
    {
        console.error(err.message)
    }
}


transformFile(filename);

