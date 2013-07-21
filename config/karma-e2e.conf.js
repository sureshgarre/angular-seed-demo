basePath = '../';

files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/**/*.js'
];

//Will not monitor files
autoWatch = false;

browsers = ['Chrome'];

//Run once, then exit
singleRun = true;

proxies = {
  '/': 'http://localhost:8000/'
};

junitReporter = {
  outputFile: 'test_out/e2e.xml',
  suite: 'e2e'
};
