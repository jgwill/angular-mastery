//gulp

//read json

var package = require('./package.json');

var gixng_buttons_packaging_sources 
= package.gix.packaging.gixngbuttons.sources; //this will be copied into:
var gixng_buttons_packaging_target 
=package.gix.packaging.gixngbuttons.path;

const gulp = require('gulp'),
   copy = require('gulp-copy'),
   clean = require('gulp-clean');

gulp.task('gixng:copy',function ()
{
return gulp.src(gixng_buttons_packaging_sources)
   .pipe(gulp.dest(gixng_buttons_packaging_target));
});