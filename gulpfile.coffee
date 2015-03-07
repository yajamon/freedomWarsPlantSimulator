gulp = require 'gulp'
tsc  = require 'gulp-typescript'

tscBuildOptions = {
    target: "ES5",
    noImplicitAny: true,
}

gulp.task 'copy', ()->
    gulp.src 'src/html/**'
    .pipe gulp.dest 'dest/html'

gulp.task 'typescript-build', ()->
    gulp.src 'src/ts/**/*.ts'
    .pipe tsc tscBuildOptions
    .pipe gulp.dest 'dest/js'

gulp.task 'build', ['copy', 'typescript-build']

gulp.task 'test-build', ['build'], ()->
    gulp.src 'test/src/ts/**/*.ts'
    .pipe tsc tscBuildOptions
    .pipe gulp.dest 'test/dest/js'

gulp.task 'watch', ['build'], ()->
    gulp.watch 'src/**/*.html', ['copy']
    gulp.watch 'src/**/*.ts', ['typescript-build']

gulp.task 'default', ['build']
