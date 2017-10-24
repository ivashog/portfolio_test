var gulp = require("gulp"),
    browserSync = require('browser-sync');

//server
gulp.task('server', function () {
    browserSync({
        port: 9000,
        server: {
            baseDir: 'app'
        }
    });
});

//watching
gulp.task('watch', function () {
    gulp.watch([
        'app/*.html',
        'app/css/**/*.css',
        'app/js/**/*.js'
    ]).on('change', browserSync.reload);
});

//default task
gulp.task('default', ['server','watch']);