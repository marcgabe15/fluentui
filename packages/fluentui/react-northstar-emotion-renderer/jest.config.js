const commonConfig = require('@uifabric/build/jest');

const config = commonConfig({
  name: 'react-northstar-emotion-renderer',
  moduleNameMapper: require('lerna-alias').jest({
    directory: require('@uifabric/build/monorepo/findGitRoot')(),
  }),
});

module.exports = config;
