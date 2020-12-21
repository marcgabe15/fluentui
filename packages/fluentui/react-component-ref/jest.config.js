const commonConfig = require('@uifabric/build/jest');

const config = commonConfig({
  name: 'react-component-ref',
  moduleNameMapper: require('lerna-alias').jest({
    directory: require('@uifabric/build/monorepo/findGitRoot')(),
  }),
});

module.exports = config;
