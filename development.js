const Application = require('thinkjs');
const watcher = require('think-watcher');
const instance = new Application({
  ROOT_PATH: __dirname,
  watcher: watcher,
  env: 'development',
  APP_PATH: `${__dirname}/src`
});

instance.run();
