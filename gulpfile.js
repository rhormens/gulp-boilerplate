'use strict';


var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('./config/gulp-config.js');

plugins.util.log('### GULP BOILERPLATE ###');

function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins, config);
}

gulp.task('sass:production', getTask('sass-production'));
gulp.task('sass:dev', getTask('sass-dev'));
gulp.task('sass:watch', getTask('sass-watch'));
gulp.task('js:compress', getTask('js-compress'));
gulp.task('js:watch', getTask('js-watch'));
gulp.task('sprite', getTask('sprite'));
gulp.task('server', getTask('server'));
gulp.task('default', ['sass:dev', 'sass:watch', 'js:compress', 'js:watch', 'sprite']);
