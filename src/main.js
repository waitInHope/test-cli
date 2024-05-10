const { program } = require('commander');
const version = require('./utils/constants');
const mapActions = require('./commands');

Object.keys(mapActions).forEach(action => {
  program.command(action)
    .alias(mapActions[action].alias)
    .description(mapActions[action].description)
    .action(() => {
      mapActions[action].action();
    })
})

program.on('--help', () => {
  console.log('\nExamples:');
  Object.keys(mapActions).forEach((action) => {
      mapActions[action].examples.forEach(example => {
          console.log(`${example}`);
      })
})})

program.version(version).parse(process.argv);
