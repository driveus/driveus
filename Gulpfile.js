var gulp = require('gulp'),
    sass = require('gulp-sass'),
    react = require('gulp-react'),
    watch = require('gulp-watch'),
    gutil = require('gulp-util')

gulp.task('react', function () {
    return gulp.src('public/js/*.jsx')
        .pipe(react())
        .pipe(gulp.dest('public/dist'));
});

gulp.task('sass', function () {
  return gulp.src('./public/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/sass/*.scss', ['sass']);
  gulp.watch('public/js/*.jsx', ['react']);
});

gulp.task('default', function() {
  return gutil.log('Gulp is running!')
});
