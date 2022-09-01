import { readFile, writeFile } from "fs/promises";

// reading index.html file in memory
// readfile by default return buffer
// utf-8 converts bufers to string
let template = await readFile(
  new URL("./index.html", import.meta.url),
  "utf-8"
);

// data to replace in html file
const data = {
  title: "My new file",
  body: "I wrote this file to disk using node",
};

// loop will run 2 time 1 for each key
// {key} will be replaced by value using replace fuction
for (const [key, val] of Object.entries(data)) {
  template = template.replace(`{${key}}`, val);
}

console.log(template);
