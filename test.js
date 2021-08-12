//
// test.js
//


import { doTransformation } from './ics_transform.js';

import { strict as assert } from 'assert';


const scheduleCD = 
{
    C: "C CS Projects",
    D: "D APCS"
};

let icsCD = doTransformation(scheduleCD);

const cPeriods = icsCD.match(/C CS Projects/g);
assert.equal(cPeriods.length, 186); 

if (cPeriods.length !== 186)
{
    console.log("cPeriods.length:", cPeriods.length);
    process.exit(1);
}

const dPeriods = icsCD.match(/D APCS/g);
if (dPeriods.length !== 186)
{
    console.log("dPeriods.length:", dPeriods.length);
    process.exit(1);
}

const cdPeriods = icsCD.match(/SUMMARY:/g);
if (cdPeriods.length !== 372)
{
    console.log("cdPeriods.length:", cdPeriods.length);
    process.exit(1);
}

const scheduleFI = 
{
    I: "I PCHA",
    F: "F MultiV"
};

let icsFI = doTransformation(scheduleFI);

const fPeriods = icsFI.match(/F MultiV/g);
if (fPeriods.length !== 187)
{
    console.log("fPeriods.length:", fPeriods.length);
    process.exit(1);
}

const iPeriods = icsFI.match(/I PCHA/g);
if (iPeriods.length !== 184)
{
    console.log("iPeriods.length:", iPeriods.length);
    process.exit(1);
}

const fiPeriods = icsFI.match(/SUMMARY:/g);
if (fiPeriods.length !== 371)
{
    console.log("fiPeriods.length:", fiPeriods.length);
    process.exit(1);
}

