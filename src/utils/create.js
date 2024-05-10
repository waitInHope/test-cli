const promptList = require('./promptList');
const { cloneGitRepo } = require('./git');
const { templateProject } = require('./constants');
const { createFuncLoadingByOra } = require('./loading'); 
const FileHanding = require('./file');

const create = async (name) => {
  console.log('应用名称是:', name);
  const inquirer = await import('inquirer');
  const answer = await inquirer.default.prompt(promptList);
  const { framework } = answer;
  console.log('你选择的框架是:', framework);
  if (templateProject[framework]) {
    const res = await createFuncLoadingByOra(() => cloneGitRepo(templateProject[framework], name, 'feat_cli_template'), '拉取代码');
    if (res) {
      console.log('创建应用完成', name);
      new FileHanding(name, '1000');
    }
  } else {
    console.log('暂无当前框架的模板项目');
  }
}

module.exports = create;