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

const dPeriods = icsCD.match(/D APCS/g);
assert.equal(dPeriods.length, 186);

const cdPeriods = icsCD.match(/SUMMARY:/g);
assert.equal(cdPeriods.length, 372);


const scheduleFI = 
{
    I: "I PCHA",
    F: "F MultiV"
};

let icsFI = doTransformation(scheduleFI);

const fPeriods = icsFI.match(/F MultiV/g);
assert.equal(fPeriods.length, 187);

const iPeriods = icsFI.match(/I PCHA/g);
assert.equal(iPeriods.length, 184);

const fiPeriods = icsFI.match(/SUMMARY:/g);
assert.equal(fiPeriods.length, 371);

