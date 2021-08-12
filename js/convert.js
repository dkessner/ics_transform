//
// convert.js
//

import ical from 'ical.js';
import { readFileSync } from 'fs';

let filename = "rotation.ics";

function icsToJSON(filename)
{
    try 
    {
        const ics = readFileSync(filename, 'utf8')
        let icsObject = ical.parse(ics);
        return JSON.stringify(icsObject, null, 4);
    }        
    catch (err) 
    {
        console.error(err.message);
    }
}

const code = "export const icsObject =\n" + icsToJSON(filename) + ";";

console.log(code);

