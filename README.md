# Medium2Markdown (WIP)
Medium2Markdown converts your Medium.com export to Markdown which can easily be imported into other blogging platforms like CMSes and static site generators.

## Requirements
- Node.js/NPM (Visit https://nodejs.org/en/download).

## Usage
- Export your Medium.com posts (Go to https://medium.com/me/settings > Download your information > Download .zip).
- Clone this repo `git clone https://github.com/nicholaskajoh/Medium2Markdown.git`.
- Change directory to the project root `cd Medium2Markdown/`.
- Unzip the export and copy the contents of _medium-export/posts/_ to the _input/_ folder in the project root.
- Install dependencies `npm install`.
- Make _convert.sh_ executable `chmod +x convert.sh`.
- Run the script `./convert.sh`.
- Check _output/_ for the generated Markdown files.

## Todo
- Add front matter with relevant post metadata to generated md files.
- Add documentation to aid better understanding of the inner workings of the program.