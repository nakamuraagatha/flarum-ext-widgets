var flarum = require('flarum-gulp');

flarum({
  modules: {
    'davis/widgets': [
      'src/**/*.js'
    ]
  }
});