const axios = require('axios');
const fs = require('fs');
const path = require('path');
var done = false;

module.exports = function(context, options) {
  const { baseUrl, outputDir, token } = options;

  return {
    name: 'github',
    async loadContent() {
      if (done) {
        return;
      }
      done = true;
      console.log('QUII');

      try {
        const docsUrl = `https://api.github.com/repos/${baseUrl}/contents/docs`;
        const [docs, sidebar] = await Promise.all([
          fetchDocs(docsUrl, baseUrl, outputDir, token),
          fetchSidebar(outputDir, token)
        ]);

        return { docs, sidebar };
      } catch (error) {
        console.error('Error loading content... Maybe your repos is not correctly set up');
      }
    }
  };
};

async function fetchDocs(docsUrl, baseUrl, outputDir, token) {
  const headers = {    headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + token,
    'X-GitHub-Api-Version': '2022-11-28'
  }};
  const {data} = await axios.get(docsUrl, headers);
/*   fs.rm('.docusaurus',  { recursive: true }, (err) => {
    if (err) {
      console.log("Nono");
    }
  }) */
  /* fs.readdir('docs', (err, files) => {
    if (err) throw err;
  
    for (const file of files) {
      if (file === 'intro.md') {
        continue;
      }
      fs.rm(path.join('docs', file),  { recursive: true }, (err) => {
        if (err) {
          console.log("Nono");
        }
      })
    }
  }); */
  for (const filePath of data) {
    if (!filePath.name.endsWith('.md')) {
      const data2 = await axios.get(docsUrl + '/' + filePath.name, headers);
      const p = path.join(outputDir, 'docs', (filePath.folder || ''), filePath.name);
      console.log('Creo', p);
      fs.mkdir(p, () => {});
      data2.data.forEach(e => {
        e.folder = ((e.folder || '') + '/' + filePath.name).replace(/^\//g, '');
      });
      data.push(...data2.data);
      continue;
    }
  }
  for (const filePath of data) {
    if (!filePath.name.endsWith('.md')) {
      continue;
    }

    const fileUrl = `https://raw.githubusercontent.com/${baseUrl}/main/docs/${(filePath.folder || '') + '/' + filePath.name}?c=` + (new Date()).getTime();
    const {data} = await axios.get(fileUrl, headers);
    const outputFilePath = path.join(outputDir, 'docs', (filePath.folder || ''), filePath.name);
    console.log('PROVA', outputFilePath);
    fs.writeFileSync(outputFilePath, data);
  }
}


async function fetchSidebar(outputDir, token) {
  const { data } = await axios.get(`https://raw.githubusercontent.com/${docsUrl}/main/sidebars.js`, headers);
  const outputFilePath = path.join(outputDir, 'sidebars.js');
  fs.writeFileSync(outputFilePath, data);
}
