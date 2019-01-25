const fs = require('fs');
const TurndownService = require('turndown');

const argv = require('minimist')(process.argv.slice(2));
const { filePath } = argv;

const htmlString = fs.readFileSync(filePath, 'utf8');

const turndownService = new TurndownService();
const mdContent = turndownService.turndown(htmlString);

const outputFileName = `./output${filePath.split('.')[1]}.md`;
fs.writeFileSync(outputFileName, mdContent);