//
// test.js
//


import { doTransformation } from './ics_transform.js';
import { strict as assert } from 'assert';

const fall21Start = "2021-08";
const fall21End = "2021-12-31";

const spring22Start = "2022";
const spring22End = "2022-06";

const scheduleCD = 
{
    C: "C CS Projects",
    D: "D APCS"
};


const icsCD = doTransformation(scheduleCD);

const cPeriods = icsCD.match(/C CS Projects/g);
assert.equal(cPeriods.length, 186); 

const dPeriods = icsCD.match(/D APCS/g);
assert.equal(dPeriods.length, 186);

const cdPeriods = icsCD.match(/SUMMARY:/g);
assert.equal(cdPeriods.length, 372);


const icsCD_fall21 = doTransformation(scheduleCD, fall21Start, fall21End);

const cPeriods_fall21 = icsCD_fall21.match(/C CS Projects/g);
assert.equal(cPeriods_fall21.length, 32);

const dPeriods_fall21 = icsCD_fall21.match(/D APCS/g);
assert.equal(dPeriods_fall21.length, 32);

const cdPeriods_fall21 = icsCD_fall21.match(/SUMMARY:/g);
assert.equal(cdPeriods_fall21.length, 64);


const icsCD_spring22 = doTransformation(scheduleCD, spring22Start, spring22End);

const cPeriods_spring22 = icsCD_spring22.match(/C CS Projects/g);
assert.equal(cPeriods_spring22.length, 41);

const dPeriods_spring22 = icsCD_spring22.match(/D APCS/g);
assert.equal(dPeriods_spring22.length, 41);

const cdPeriods_spring22 = icsCD_spring22.match(/SUMMARY:/g);
assert.equal(cdPeriods_spring22.length, 82);


const icsCD_21_22 = doTransformation(scheduleCD, fall21Start, spring22End);

const cPeriods_21_22 = icsCD_21_22.match(/C CS Projects/g);
assert.equal(cPeriods_21_22.length, 73);

const dPeriods_21_22 = icsCD_21_22.match(/D APCS/g);
assert.equal(dPeriods_21_22.length, 73);

const cdPeriods_21_22 = icsCD_21_22.match(/SUMMARY:/g);
assert.equal(cdPeriods_21_22.length, 146);



const scheduleFI = 
{
    I: "I PCHA",
    F: "F MultiV"
};


const icsFI = doTransformation(scheduleFI);

const fPeriods = icsFI.match(/F MultiV/g);
assert.equal(fPeriods.length, 187);

const iPeriods = icsFI.match(/I PCHA/g);
assert.equal(iPeriods.length, 184);

const fiPeriods = icsFI.match(/SUMMARY:/g);
assert.equal(fiPeriods.length, 371);


const icsFI_fall21 = doTransformation(scheduleFI, fall21Start, fall21End);

const fPeriods_fall21 = icsFI_fall21.match(/F MultiV/g);
assert.equal(fPeriods_fall21.length, 32);

const iPeriods_fall21 = icsFI_fall21.match(/I PCHA/g);
assert.equal(iPeriods_fall21.length, 32);

const fiPeriods_fall21 = icsFI_fall21.match(/SUMMARY:/g);
assert.equal(fiPeriods_fall21.length, 64);


const icsFI_spring22 = doTransformation(scheduleFI, spring22Start, spring22End);

const fPeriods_spring22 = icsFI_spring22.match(/F MultiV/g);
assert.equal(fPeriods_spring22.length, 41);

const iPeriods_spring22 = icsFI_spring22.match(/I PCHA/g);
assert.equal(iPeriods_spring22.length, 41);

const fiPeriods_spring22 = icsFI_spring22.match(/SUMMARY:/g);
assert.equal(fiPeriods_spring22.length, 82);


const icsFI_21_22 = doTransformation(scheduleFI, fall21Start, spring22End);

const fPeriods_21_22 = icsFI_21_22.match(/F MultiV/g);
assert.equal(fPeriods_21_22.length, 73);

const iPeriods_21_22 = icsFI_21_22.match(/I PCHA/g);
assert.equal(iPeriods_21_22.length, 73);

const ciPeriods_21_22 = icsFI_21_22.match(/SUMMARY:/g);
assert.equal(ciPeriods_21_22.length, 146);



