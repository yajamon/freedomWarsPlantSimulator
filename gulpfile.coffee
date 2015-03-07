gulp = require 'gulp'
tsc  = require 'gulp-typescript'

# Main task
gulp.task 'default', ['build']

gulp.task 'build', ['copy', 'ts-build']

gulp.task 'copy', ()->
    gulp.src 'src/html/**'
    .pipe gulp.dest 'dest/html'

gulp.task 'watch', ['build'], ()->
    gulp.watch 'src/**/*.html', ['copy']
    gulp.watch 'src/**/*.ts', ['ts-build']


# Sub task

tscBuildOptions = {
    target: "ES5",
    noImplicitAny: true,
}

gulp.task 'ts-build', ()->
    gulp.src 'src/ts/**/*.ts'
    .pipe tsc tscBuildOptions
    .pipe gulp.dest 'dest/js'


gulp.task 'test-build', ['build'], ()->
    gulp.src 'test/src/ts/**/*.ts'
    .pipe tsc tscBuildOptions
    .pipe gulp.dest 'test/dest/js'

