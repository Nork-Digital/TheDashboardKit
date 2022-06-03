import gulp from "gulp";

import concat from "gulp-concat";
import babel from "gulp-babel";
import uglify from "gulp-uglify";

import imagemin from "gulp-imagemin";
import clean from "gulp-clean";

import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
import autoPrefixer from "gulp-autoprefixer";

import fileinclude from "gulp-file-include";

function includeHtml() {
  return gulp
    .src(["index.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
}
gulp.task("include-html", includeHtml);

function cleanGulpImg() {
  return gulp.src("/assets/img/*").pipe(clean());
}
gulp.task("clean-img", cleanGulpImg);

function gulpImg() {
  return gulp
    .src("./assets/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("/assets/img/"));
}
gulp.task("gulp-img", gulp.series("clean-img", gulpImg));

function gulpCss() {
  return gulp
    .src("./assets/css/sass/*")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(
      autoPrefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(gulp.dest("./assets/css/"));
}
gulp.task("gulp-css", gulpCss);

function gulpJs() {
  return gulp
    .src("./assets/js/main/*")
    .pipe(concat("script.js"))
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./assets/js/"));
}
gulp.task("gulp-js", gulpJs);

gulp.task("watch", function () {
  gulp.watch("/assets/img-raw/**/*", gulp.series(cleanGulpImg, gulpImg));
  gulp.watch("./assets/css/sass/*", gulpCss);
  gulp.watch("./assets/js/main/*", gulpJs);
});

gulp.task(
  "default",
  gulp.parallel("watch", "gulp-js", "gulp-css", "include-html")
);
