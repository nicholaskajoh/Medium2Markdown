# Medium2Markdown (WIP)
Medium2Markdown converts your Medium.com export to Markdown which can be easily imported into other blogging platforms like CMSes and static site generators.

## Requirements
- Node.js/NPM

## Usage
- Export your Medium.com posts (Go to https://medium.com/me/settings > Download your information > Download .zip).
- Clone this repo `git clone https://github.com/nicholaskajoh/Medium2Markdown.git`.
- Change directory to the project root `cd ./Medium2Markdown`.
- Unzip the export and copy the contents of _medium-export/posts/_ to the _posts/_ folder in the project root.
- Make _convert.sh_ executable `chmod +x convert.sh`.
- Run the script `./convert.sh`.
- Check _output/posts/_ for the generated Markdown files.

## Todo
- Remove CSS code from generated md files.
- Add front matter with relevant post metadata to generated md files.
- Create user- and SEO-friendly slugs/file names. 
- Comment the code for better readability.
- Add documentation to aid better understanding of the inner workings of the program.