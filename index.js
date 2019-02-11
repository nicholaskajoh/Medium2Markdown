// import the File System and Turndown modules
const fs = require('fs');
const TurndownService = require('turndown');
// import helper module util.js
const util = require('./util');

// use the minimalist package to retrieve a post's path from CLI
// i.e node index.js --filePath /path/to/medium/post.html
const argv = require('minimist')(process.argv.slice(2));
const { filePath } = argv;

// read and clean the contents of the file
let htmlString = fs.readFileSync(filePath, 'utf8');
htmlString = util.removeTitleTag(htmlString);
htmlString = util.removeStyleTags(htmlString);

// initialize the Turndown service and convert the HTML to Markdown
const turndownService = new TurndownService();
const mdContent = turndownService.turndown(htmlString);

// create an output file containing the Markdown
let postSlug = util.getPostSlug(filePath);
const outputFileName = `./output/${postSlug}.md`;
fs.writeFileSync(outputFileName, mdContent);