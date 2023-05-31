const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');

const fileList = ['main.js', 'manifest.json', 'style.css'];
// eslint-disable-next-line quotes, no-useless-escape
const installPath = "/mnt/c/Users/Tim/sciebo/obsidian-test/Test/.obsidian/plugins/zotero-links";

function copyFile(fileName) {
  if (!fs.existsSync(fileName)) {
    console.log(`${fileName} does not exist. Copying was skipped. Be alert, if you deleted this file.`);
    return
  }

  const srcPath = path.join("./", fileName);
  const targetPath = path.join(installPath, fileName);
  
  fs.copyFile(srcPath, targetPath, (err) => {
    if (err) throw err;
    console.log(`${fileName} copied to ${targetPath}.`);
  });
}

function copyAllFiles() {
  fileList.forEach(copyFile);
}

copyAllFiles();

chokidar.watch(fileList).on('all', (_event, fileName) => {
  copyFile(fileName);
});
