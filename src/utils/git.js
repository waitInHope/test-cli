const { execSync } = require('child_process');
const fs = require('fs');

const cloneGitRepo = (repo, pathName, branch) => {
  const path = `./cloneRepo/${pathName}`;
  if (fs.existsSync(path)) {
    console.error('存在同名应用，请修改应用名称');
    return false;
  }
  try {
    execSync(`git clone ${repo} ${path} --branch ${branch}`);
    return true;
  } catch (err) {
    console.error(`clone error, reason${err}`);
    return false;
  }
}

module.exports = {
  cloneGitRepo,
}
