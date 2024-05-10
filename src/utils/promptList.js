const prompt = [
  {
    type: 'list',
    name: 'framework',
    message: '请选择一个该子应用的框架',
    choices: ['react', 'vue'],
    default: 'react'
  }
]

module.exports = prompt