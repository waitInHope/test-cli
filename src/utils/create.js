const promptList = require('./promptList');
const { cloneGitRepo } = require('./git');
const { templateProject } = require('./constants');

const create = async (name) => {
  console.log('子应用名称是:', name);
  const inquirer = await import('inquirer');
  const answer = await inquirer.default.prompt(promptList);
  const { framework } = answer;
  console.log('你选择的框架是:', framework);
  if (templateProject[framework]) {
    console.log('开始拉取代码');
    const res = cloneGitRepo(templateProject[framework], name, 'master');
    if (res) {
      console.log('创建子应用完成', name);
    }
  }
}

module.exports = create;