var gulp = require('gulp');
var fs = require('fs');
var gutil = require('gulp-util');

fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
});

gulp.task('dev', ['watch:css', 'watch:js', 'dev:server']);




