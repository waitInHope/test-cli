const promptList = require('./promptList');

const create = async (name) => {
  console.log('开启参数交互');
  const inquirer = await import('inquirer');
  const answer = await inquirer.default.prompt(promptList);
  const { framework } = answer;
  console.log('你选择的框架是:', framework);
  console.log('创建子应用完成', name);
}

module.exports = create;