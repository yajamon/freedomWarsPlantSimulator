'use strict'
var gulp = require('gulp');
var tsc = require('gulp-typescript');

var tscBuildOptions = {
    target: "ES5",
    noImplicitAny: true,
};

gulp.task('copy', function () {

    gulp.src('src/html/**')
        .pipe(gulp.dest('dest/html'));
});

gulp.task('build', ['copy'], function () {
    gulp.src('src/ts/**/*.ts')
        .pipe(tsc(tscBuildOptions))
        .pipe(gulp.dest('dest/js'));
});

gulp.task('test-build', ['build'], function () {
    gulp.src('test/src/ts/**/*.ts')
        .pipe(tsc(tscBuildOptions))
        .pipe(gulp.dest('test/dest/js'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/**/*.ts', ['build']);
});

gulp.task('default', ['build']);
