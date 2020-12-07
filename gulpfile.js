const {src, dest, series, parallel} = require('gulp');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const del = require('del');

function clean() {
  return del('dist');
}

function htmlTask() {
  return src('src/*.html').pipe(dest('dist'));
}

function stylesTask() {
  return src('src/style.css')
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(dest('dist'));
}

function scriptsTask() {
  return src('src/script.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest('dist/js'));
}

exports.html = htmlTask;
exports.styles = stylesTask;
exports.scripts = scriptsTask;
exports.default = series(clean, htmlTask, parallel(scriptsTask, stylesTask));
