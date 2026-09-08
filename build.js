const fs = require("fs");
const path = require("path");

const sourceFile = path.join(__dirname, "calculator.js");
const outputDirectory = path.join(__dirname, "dist");
const outputFile = path.join(outputDirectory, "calculator.js");

if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
}

const sourceCode = fs.readFileSync(sourceFile, "utf8");

fs.writeFileSync(outputFile, sourceCode);

console.log("Build successful.");
console.log(`Artifact created at: ${outputFile}`);