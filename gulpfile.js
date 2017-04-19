var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


gulp.task('sass', function () {
    gulp.src('./resources/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('scripts', function() {
    return gulp.src('./resources/js/**/*.js')
        .pipe(concat('main.min.js'))
        .pipe(gulp.dest('./public/js/'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('watch', function() {
    gulp.watch('./resources/scss/**/*.scss', ['sass'])
    gulp.watch('./resources/js/**/*.js', ['scripts'])
});
