'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const concatCss = require('gulp-concat-css');
const uglify = require('gulp-uglify');
const cleanCss = require('gulp-clean-css');

gulp.task('styles', function () {
  return gulp.src('./assets/css/*.css')
    .pipe(concat('app.css'))
     .pipe(cleanCss())
     .pipe(gulp.dest('./assets/dist/css/'));
});

gulp.task('scripts', function () {
    return gulp.src('./assets/js/*.js')
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./assets/dist/js/'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/css/*.css', gulp.series('styles'));
  gulp.watch('./assets/js/*.js', gulp.series('scripts'));
});

// Default Task
gulp.task('default', gulp.parallel('watch'));