// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    karmaTypescriptConfig: {
      bundlerOptions: {
          entrypoints: /\.test\.tsx$/,
          exclude: [
              // dynamic requires or stuff that breaks PhantomJS
              "node-pre-gyp",
              "react/addons",
              "react/lib/ExecutionEnvironment",
              "react/lib/ReactContext",
              "send"
          ],
          // webpack stuff, can be removed if webpack imports are removed from dev setup
          ignore: ["../config/webpack/dev", "webpack", "webpack-manifest-plugin"]
      },
      compilerOptions: {
          target: "ES6",
          lib: ["es2016", "dom"]
      },
      tsconfig: "tsconfig.json"
  },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
