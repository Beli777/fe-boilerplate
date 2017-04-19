var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var coffee = require('gulp-coffee');
var notify = require("gulp-notify");

gulp.src("./src/test.ext")
  .pipe(notify("Hello Gulp!"));

gulp.src('./resources/*.ext')
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest('./public'));

gulp.task('sass', function () {
    gulp.src('./resources/scss/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./public/css/'))
    .pipe(notify('Sass compiled'));
});

gulp.task('scripts', function() {
    return gulp.src('./resources/js/**/*.js')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('.public/js/'))
    .pipe(uglify())
    .pipe(plumber.stop())
    .pipe(gulp.dest('.public/js/'))
    .pipe(notify('Javascript compiled'));
});

gulp.task('watch', function() {
    gulp.watch('./resources/scss/**/*.scss', ['sass'])
    gulp.watch('./resources/js/**/*.js', ['scripts'])
});
