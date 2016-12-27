/**
 * Created by Õı√Œ≈Ê on 2016/12/27.
 */

var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");

gulp.task("default", function () {
    console.log("this in default");
});

gulp.task("scripts", function () {
    gulp.src(["script1.js", "script2.js"])
        .pipe(concat("all.js"))
        .pipe(gulp.dest("./dist/"));
});

gulp.task("script", function () {
    gulp.src("dist/all.js")
        .pipe(gulp.uglify())
        .pipe("./dist/");
});