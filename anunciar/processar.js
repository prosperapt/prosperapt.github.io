import { readJSON } from 'https://deno.land/x/flat@0.0.14/mod.ts'; 

// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0]; // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename);

// Step 2: Filter specific data we want to keep and write to a new JSON file
const v = Object.values(json)[7];

// Step 3. Write a new JSON file with our filtered data
const newFilename = 'anunciar/conta.js'; // name of a new file to be saved
// await writeJSON(newFilename, v, { append: true }); // create a new JSON file with just the Bitcoin price

var anterior = await Deno.readTextFile(newFilename);
anterior = anterior.substring(0, anterior.length-2);
const proximo = anterior + ", " + v + "];";
console.log(proximo);
await Deno.writeTextFile(newFilename, proximo);
