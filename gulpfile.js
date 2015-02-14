'use strict'
var gulp = require('gulp');

gulp.task('copy', function () {

    gulp.src('src/html/**')
        .pipe(gulp.dest('dest/html'));
});

gulp.task('build', [
    'copy'
]);

gulp.task('default', ['build']);
