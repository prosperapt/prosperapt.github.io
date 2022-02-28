import { readJSON } from 'https://deno.land/x/flat@0.0.14/mod.ts'; 

// Passo 1: Obter ficheiro do contador e copiar a última variável 
const ficheiro1 = Deno.args[0]; // É o indicado no flat.yaml
const json = await readJSON(ficheiro1); 
const valor = Object.values(json)[7]; // É a variável "value" no ficheiro

// Passo 2: adicionar a contagem ao ficheiro de acumulação de contagem
var agora = new Date();
const ficheiro2 = 'anunciar/conta.js'; // É o ficheiro conta.js
var anterior = await Deno.readTextFile(ficheiro2); // Obtém as contagens anteriores
anterior = anterior.replace("]", "").replace(";", ""); // Elimina os dois últimos caracteres: "];"
const proximo = anterior + ", " + (agora * 1) + ": " + valor + "];"; // Acrescenta nova contagem
await Deno.writeTextFile(ficheiro2, proximo); // Grava no ficheiro
