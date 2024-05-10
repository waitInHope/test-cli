const fs = require('fs');

const DIR = ['src/components/list.js'];
const reg = /\<%(.+?)%\>/g;

class FileHanding {
  constructor(appName, port) {
    const path = `./cloneRepo/${appName}`;
    DIR.forEach(dir => {
      const p = `${path}/${dir}`;
      this.writeFile(p, appName, port);
    })
  }

  writeFile(path, appName, port) {
    console.log('开始替换模板内容', path);
    const res = fs.readFileSync(path, 'utf8');
    const newText = this.replaceVar(res, appName, port);
    fs.writeFileSync(`${path}`, newText);
  }

  replaceVar(text, appName, port) {
    const newText = text.replaceAll(reg, (match, value) => {
      if(value === 'appName') return appName;
      else if (value === 'port') return port;
      return '';
    });
    return newText;
  }
}

module.exports = FileHanding;