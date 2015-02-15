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

gulp.task('typescript-build',function () {
    gulp.src('src/ts/**/*.ts')
        .pipe(tsc(tscBuildOptions))
        .pipe(gulp.dest('dest/js'));
});

gulp.task('build', ['copy', 'typescript-build'], function () {
});

gulp.task('test-build', ['build'], function () {
    gulp.src('test/src/ts/**/*.ts')
        .pipe(tsc(tscBuildOptions))
        .pipe(gulp.dest('test/dest/js'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('src/**/*.html', ['copy']);
    gulp.watch('src/**/*.ts', ['typescript-build']);
});

gulp.task('default', ['build']);
