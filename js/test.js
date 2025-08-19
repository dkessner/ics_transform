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
    C: {summary: "C CS Projects", description: "zoom link"},
    D: {summary: "D APCS", "location": "D215"}
};

/*
// removed with 23-24 update
const icsCD = doTransformation(scheduleCD);

const cPeriods = icsCD.match(/C CS Projects/g);
assert.equal(cPeriods.length, 257); 

const dPeriods = icsCD.match(/D APCS/g);
assert.equal(dPeriods.length, 257);

const cdPeriods = icsCD.match(/SUMMARY:/g);
assert.equal(cdPeriods.length, 514);
*/


const icsCD_fall21 = doTransformation(scheduleCD, fall21Start, fall21End);

const cPeriods_fall21 = icsCD_fall21.match(/C CS Projects/g);
assert.equal(cPeriods_fall21.length, 32);

const dPeriods_fall21 = icsCD_fall21.match(/D APCS/g);
assert.equal(dPeriods_fall21.length, 32);

const cdPeriods_fall21 = icsCD_fall21.match(/SUMMARY:/g);
assert.equal(cdPeriods_fall21.length, 64);


const icsCD_spring22 = doTransformation(scheduleCD, spring22Start, spring22End);

const cPeriods_spring22 = icsCD_spring22.match(/C CS Projects/g);
assert.equal(cPeriods_spring22.length, 40);

const dPeriods_spring22 = icsCD_spring22.match(/D APCS/g);
assert.equal(dPeriods_spring22.length, 40);

const cdPeriods_spring22 = icsCD_spring22.match(/SUMMARY:/g);
assert.equal(cdPeriods_spring22.length, 80);


const icsCD_21_22 = doTransformation(scheduleCD, fall21Start, spring22End);

const cPeriods_21_22 = icsCD_21_22.match(/C CS Projects/g);
assert.equal(cPeriods_21_22.length, 72);

const dPeriods_21_22 = icsCD_21_22.match(/D APCS/g);
assert.equal(dPeriods_21_22.length, 72);

const cdPeriods_21_22 = icsCD_21_22.match(/SUMMARY:/g);
assert.equal(cdPeriods_21_22.length, 144);

// removed with 23-24 update
//const cdLocations_21_22 = icsCD_21_22.match(/LOCATION:D215/g);
//assert.equal(cdLocations_21_22.length, 72);

//const cdDescriptions_21_22 = icsCD_21_22.match(/DESCRIPTION:zoom link/g);
//assert.equal(cdDescriptions_21_22.length, 72);


const scheduleFI = 
{
    I: {summary: "I PCHA", "location": "C221"},
    F: {summary: "F MultiV", description: "zoom link 2"}
};

/*
// removed with 23-24 update
const icsFI = doTransformation(scheduleFI);

const fPeriods = icsFI.match(/F MultiV/g);
assert.equal(fPeriods.length, 258);

const iPeriods = icsFI.match(/I PCHA/g);
assert.equal(iPeriods.length, 255);

const fiPeriods = icsFI.match(/SUMMARY:/g);
assert.equal(fiPeriods.length, 513);
*/


const icsFI_fall21 = doTransformation(scheduleFI, fall21Start, fall21End);

const fPeriods_fall21 = icsFI_fall21.match(/F MultiV/g);
assert.equal(fPeriods_fall21.length, 32);

const iPeriods_fall21 = icsFI_fall21.match(/I PCHA/g);
assert.equal(iPeriods_fall21.length, 32);

const fiPeriods_fall21 = icsFI_fall21.match(/SUMMARY:/g);
assert.equal(fiPeriods_fall21.length, 64);


const icsFI_spring22 = doTransformation(scheduleFI, spring22Start, spring22End);

const fPeriods_spring22 = icsFI_spring22.match(/F MultiV/g);
assert.equal(fPeriods_spring22.length, 40);

const iPeriods_spring22 = icsFI_spring22.match(/I PCHA/g);
assert.equal(iPeriods_spring22.length, 40);

const fiPeriods_spring22 = icsFI_spring22.match(/SUMMARY:/g);
assert.equal(fiPeriods_spring22.length, 80);


const icsFI_21_22 = doTransformation(scheduleFI, fall21Start, spring22End);

const fPeriods_21_22 = icsFI_21_22.match(/F MultiV/g);
assert.equal(fPeriods_21_22.length, 72);

const iPeriods_21_22 = icsFI_21_22.match(/I PCHA/g);
assert.equal(iPeriods_21_22.length, 72);

const fiPeriods_21_22 = icsFI_21_22.match(/SUMMARY:/g);
assert.equal(fiPeriods_21_22.length, 144);

/*

// removed with 23-24 update
const fiLocations_21_22 = icsFI_21_22.match(/LOCATION:C221/g);
assert.equal(fiLocations_21_22.length, 72);

const fiDescriptions_21_22 = icsFI_21_22.match(/DESCRIPTION:zoom link 2/g);
assert.equal(fiDescriptions_21_22.length, 72);
*/


//
// 2022-23
//


const fall22Start = "2022-08";
const fall22End = "2022-12-31";

const spring23Start = "2023";
const spring23End = "2023-06";


const icsCD_fall22 = doTransformation(scheduleCD, fall22Start, fall22End);

const cPeriods_fall22 = icsCD_fall22.match(/C CS Projects/g);
assert.equal(cPeriods_fall22.length, 31);

const dPeriods_fall22 = icsCD_fall22.match(/D APCS/g);
assert.equal(dPeriods_fall22.length, 31);

const cdPeriods_fall22 = icsCD_fall22.match(/SUMMARY:/g);
assert.equal(cdPeriods_fall22.length, 62);


const icsCD_spring23 = doTransformation(scheduleCD, spring23Start, spring23End);

const cPeriods_spring23 = icsCD_spring23.match(/C CS Projects/g);
assert.equal(cPeriods_spring23.length, 41);

const dPeriods_spring23 = icsCD_spring23.match(/D APCS/g);
assert.equal(dPeriods_spring23.length, 41);

const cdPeriods_spring23 = icsCD_spring23.match(/SUMMARY:/g);
assert.equal(cdPeriods_spring23.length, 82);


//
// 2023-24
//


const fall23Start = "2023-08";
const fall23End = "2023-12-31";

const spring24Start = "2024";
const spring24End = "2024-06";


const icsCD_fall23 = doTransformation(scheduleCD, fall23Start, fall23End);

const cPeriods_fall23 = icsCD_fall23.match(/C CS Projects/g);
assert.equal(cPeriods_fall23.length, 32);

const dPeriods_fall23 = icsCD_fall23.match(/D APCS/g);
assert.equal(dPeriods_fall23.length, 33);

const cdPeriods_fall23 = icsCD_fall23.match(/SUMMARY:/g);
assert.equal(cdPeriods_fall23.length, 65);


const icsCD_spring24 = doTransformation(scheduleCD, spring24Start, spring24End);

const cPeriods_spring24 = icsCD_spring24.match(/C CS Projects/g);
assert.equal(cPeriods_spring24.length, 42);

const dPeriods_spring24 = icsCD_spring24.match(/D APCS/g);
assert.equal(dPeriods_spring24.length, 42);

const cdPeriods_spring24 = icsCD_spring24.match(/SUMMARY:/g);
assert.equal(cdPeriods_spring24.length, 84);


// 
// 2024-25
//


const fall24Start = "2024-08";
const fall24End = "2024-12-31";

const spring25Start = "2025";
const spring25End = "2025-06";

const scheduleGH = 
{
    G: {summary: "G APCS", description: "blah blah"},
    H: {summary: "H CS Projects", "location": "D215"}
};


const icsGH_fall24 = doTransformation(scheduleGH, fall24Start, fall24End);

const gPeriods_fall24 = icsGH_fall24.match(/G APCS/g);
assert.equal(gPeriods_fall24.length, 34);

const hPeriods_fall24 = icsGH_fall24.match(/H CS Projects/g);
assert.equal(hPeriods_fall24.length, 34);

const ghPeriods_fall24 = icsGH_fall24.match(/SUMMARY:/g);
assert.equal(ghPeriods_fall24.length, 68);


const icsGH_spring24 = doTransformation(scheduleGH, spring24Start, spring24End);

const gPeriods_spring24 = icsGH_spring24.match(/G APCS/g);
assert.equal(gPeriods_spring24.length, 41);

const hPeriods_spring24 = icsGH_spring24.match(/H CS Projects/g);
assert.equal(hPeriods_spring24.length, 41);

const ghPeriods_spring24 = icsGH_spring24.match(/SUMMARY:/g);
assert.equal(ghPeriods_spring24.length, 82);



// 
// 2025-26
//


const fall25Start = "2025-08";
const fall25End = "2025-12-31";

const spring26Start = "2026";
const spring26End = "2026-06";

const scheduleBD = 
{
    B: {summary: "B CS Projects", description: "blah blah"},
    D: {summary: "D APCS", "location": "D215"}
};


const icsBD_fall25 = doTransformation(scheduleBD, fall25Start, fall25End);

const bPeriods_fall25 = icsBD_fall25.match(/B CS Projects/g);
assert.equal(bPeriods_fall25.length, 33);

const dPeriods_fall25 = icsBD_fall25.match(/D APCS/g);
assert.equal(dPeriods_fall25.length, 33);

const bdPeriods_fall25 = icsBD_fall25.match(/SUMMARY:/g);
assert.equal(bdPeriods_fall25.length, 66);



const icsBD_spring25 = doTransformation(scheduleBD, spring25Start, spring25End);

const bPeriods_spring25 = icsBD_spring25.match(/B CS Projects/g);
assert.equal(bPeriods_spring25.length, 40);

const dPeriods_spring25 = icsBD_spring25.match(/D APCS/g);
assert.equal(dPeriods_spring25.length, 40);

const bdPeriods_spring25 = icsBD_spring25.match(/SUMMARY:/g);
assert.equal(bdPeriods_spring25.length, 80);




