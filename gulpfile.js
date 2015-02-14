'use strict'
var gulp = require('gulp');
var tsc = require('gulp-typescript');

gulp.task('copy', function () {

    gulp.src('src/html/**')
        .pipe(gulp.dest('dest/html'));
});

gulp.task('build', [
    'copy'
]);

gulp.task('test-build', ['build'], function () {
    gulp.src('test/src/ts/**/*.ts')
        .pipe(tsc())
        .pipe(gulp.dest('test/dest/js'));
});

gulp.task('default', ['build']);
