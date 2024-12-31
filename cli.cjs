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
const UTILS_BASE_URL =
  "https://raw.githubusercontent.com/2YH02/radici-ui/main/src/utils/";

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

async function ensureUtils() {
  const utilsDir = path.join(projectDir, "src", "utils");
  const cnFilePath = path.join(utilsDir, "cn.ts");
  const cnUrl = `${UTILS_BASE_URL}cn.ts`;

  if (!fs.existsSync(utilsDir)) {
    fs.mkdirSync(utilsDir, { recursive: true });
    console.log("Created src/utils directory.");
  }

  if (!fs.existsSync(cnFilePath)) {
    try {
      await downloadFile(cnUrl, cnFilePath);
      console.log("Downloaded cn.ts to src/utils/");
    } catch (err) {
      console.error("Error downloading cn.ts:", err.message);
    }
  } else {
    console.log("cn.ts already exists in src/utils/");
  }
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
    .then(async () => {
      console.log(
        `${componentName}.tsx added to your project at src/components/${componentName}/`
      );

      await ensureUtils();
    })
    .catch((err) => {
      console.error(`Error downloading ${componentName}:`, err.message);
    });
} else {
  console.log("Usage: npx radici-ui add <ComponentName>");
}
