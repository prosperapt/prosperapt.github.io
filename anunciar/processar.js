import { readJSON, writeJSON } from 'https://deno.land/x/flat@0.0.14/mod.ts'; 

// Step 1: Read the downloaded_filename JSON
const filename = Deno.args[0]; // Same name as downloaded_filename `const filename = 'btc-price.json';`
const json = await readJSON(filename);
console.log(json);

// Step 2: Filter specific data we want to keep and write to a new JSON file
const v = Object.values(json)[7];
console.log(v);

// Step 3. Write a new JSON file with our filtered data
const newFilename = 'anunciar/conta.json'; // name of a new file to be saved
// await writeJSON(newFilename, v, { append: true }); // create a new JSON file with just the Bitcoin price

const anterior = await Deno.readTextFile(newFilename);
console.log(anterior);
const proximo = anterior + "\n" + v;
console.log(proximo);
await Deno.writeTextFile(newFilename, proximo);
