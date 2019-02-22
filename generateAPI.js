"use strict";

const fs = require("fs");
const DB_PATH = "backend/db.json";
const API_CLIENT_PATH = "src/api/apiClient.js";

let key = process.argv[2];
if (!key) return;
key = key.toLowerCase();

let originalData = JSON.parse(fs.readFileSync(DB_PATH));
originalData[key] = [];

// Write to file
fs.writeFileSync(DB_PATH, JSON.stringify(originalData));

const titleCase = `${key.charAt(0).toUpperCase()}${key.substr(1)}`;

const newFunctions = `export function get${titleCase}(ctx) {
    return client.get("/${key}").then(({ data }) => {
      ctx.setState({
        ${key}: data
      });
    });
  }


  export function update${titleCase}(id, data) {
    return client.patch(\`/${key}/\${id}\`, data);
  }


  export function create${titleCase}(data) {
    return client.post("/${key}/", data);
  }`;

const originalApiClient = fs.readFileSync(API_CLIENT_PATH);

const newApiClient = `${originalApiClient}\n\n${newFunctions}`;

fs.writeFileSync(API_CLIENT_PATH, newApiClient);
