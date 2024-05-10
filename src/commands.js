const create = require('./utils/create');

const mapActions = {
  create: {
    alias: 'c',
    description: '创建应用',
    action: () => {
      create(process.argv[3]);
    },
    examples: [
      'test-cli create <app-name>',
    ]
  },
  '*': {
    alias: '',
    description: 'command not found',
    action: () => {
      console.log('command not found');
    },
    examples: []
  }
}

module.exports = mapActions;