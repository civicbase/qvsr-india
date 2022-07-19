const { override, addBabelPlugins } = require('customize-cra')

module.exports = override(
  addBabelPlugins(
    'babel-plugin-twin',
    'babel-plugin-macros',
    'styled-components',
  ),
)
