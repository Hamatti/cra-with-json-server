"use strict";

const fs = require("fs");
const DB_PATH = "backend/db.json";
const API_CLIENT_PATH = "src/api/apiClient.js";

let key = process.argv[2];
if (!key) {
  console.log(`You need to provide a model name as argument`);
  process.exit(1);
}
key = key.toLowerCase();

let originalData = JSON.parse(fs.readFileSync(DB_PATH));

if (originalData.hasOwnProperty(key)) {
  console.log(`Model ${key} already exists`);
  process.exit(1);
}

originalData[key] = [];

// Write to file
fs.writeFileSync(DB_PATH, JSON.stringify(originalData));

const titleCase = `${key.charAt(0).toUpperCase()}${key.substr(1)}`;

const newFunctions = `export function get${titleCase}(ctx) {
  return client.get("/${key}")
}

export function update${titleCase}(id, data) {
  return client.patch(\`/${key}/\${id}\`, data);
}

export function create${titleCase}(data) {
  return client.post("/${key}/", data);
}

export function delete${titleCase}(id) {
    return client.delete(\`/${key}/\${id}\`)
}`;

const originalApiClient = fs.readFileSync(API_CLIENT_PATH);

const newApiClient = `${originalApiClient}\n\n${newFunctions}`;

fs.writeFileSync(API_CLIENT_PATH, newApiClient);

console.log(`${key} was added into the database and API.

You can now import new functions with

    import { get${titleCase}, update${titleCase} and create${titleCase}, delete${titleCase} } from './api/apiClient';

and you will have access to the data.`);
