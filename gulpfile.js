'use strict'
var gulp = require('gulp');

gulp.task('copy', function () {

    gulp.src('src/html/**')
        .pipe(gulp.dest('dest/html'));
});

gulp.task('build', function () {
    gulp.run('copy');
});

gulp.task('default', function () {
    gulp.run('build');
});
