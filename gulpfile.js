const gulp = require("gulp")
const connect = require("gulp-connect")

gulp.task("connect", function() {
    connect.server({
        livereload: true
    })
})

gulp.task("reload", function() {
    gulp.src("index.html")
        .pipe(connect.reload())
})

gulp.task("watch", function() {
    gulp.watch(["index.html", "css/application.css", "js/index.js", "slides/**/*.html"], ["reload"]);
})

gulp.task("default", ["connect", "watch"]);
