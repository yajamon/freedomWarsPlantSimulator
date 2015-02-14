'use strict'
var gulp = require('gulp');

gulp.task('copy', function () {

    gulp.src('src/html/**')
        .pipe(gulp.dest('dest/html'));
});

gulp.task('default', function () {
    gulp.run('copy');
});
