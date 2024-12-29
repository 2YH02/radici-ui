#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

async function fetchModule() {
  const { default: fetch } = await import("node-fetch");
  return fetch;
}

const projectDir = process.cwd();

const [, , command, componentName] = process.argv;

const BASE_URL =
  "https://raw.githubusercontent.com/2YH02/radici-ui/main/src/components/";

async function downloadFile(url, destination) {
  const fetch = await fetchModule();

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to download file: ${response.statusText}`);
  }

  const fileStream = fs.createWriteStream(destination);
  return new Promise((resolve, reject) => {
    response.body.pipe(fileStream);
    response.body.on("error", reject);
    fileStream.on("finish", resolve);
  });
}

if (command === "add" && componentName) {
  const sourceUrl = `${BASE_URL}${componentName}/${componentName}.tsx`;
  const destinationFolderPath = path.join(
    projectDir,
    "src",
    "components",
    componentName
  );
  const destinationFilePath = path.join(
    destinationFolderPath,
    `${componentName}.tsx`
  );

  if (!fs.existsSync(destinationFolderPath)) {
    fs.mkdirSync(destinationFolderPath, { recursive: true });
  }

  downloadFile(sourceUrl, destinationFilePath)
    .then(() => {
      console.log(
        `${componentName}.tsx added to your project at src/components/${componentName}/`
      );
    })
    .catch((err) => {
      console.error(`Error downloading ${componentName}:`, err.message);
    });
} else {
  console.log("Usage: npx radici-ui add <ComponentName>");
}
