"use strict";
var gulp = require("gulp");
var pump = require("pump");
var iconfont = require("gulp-iconfont");
var iconfontCss = require("gulp-iconfont-css");
var svgSprite = require("gulp-svg-sprite");
var cheerio = require("gulp-cheerio");
var clean = require("gulp-clean");
var rename = require("gulp-rename");

var fontName = "cryptocurrency-icons";

gulp.task("webfont", function() {
  return gulp
    .src("src/svg/black/*.svg")
    .pipe(
      iconfontCss({
        fontName: fontName,
        path: "src/template.css",
        targetPath: "cryptocurrency-icons.css",
        fontPath: "",
        cssClass: "crypto-icon"
      })
    )
    .pipe(
      iconfont({
        fontName: fontName,
        prependUnicode: true,
        formats: ["eot", "ttf", "woff", "woff2"],
        normalize: true,
        fontHeight: 1001,
        descent: 200
      })
    )
    .pipe(gulp.dest("dist/webfont/"));
});

gulp.task("svg-sprite", function() {
  return gulp
    .src("src/svg/*/*.svg")
    .pipe(
      svgSprite({
        shape: {
          id: {
            separator: "."
          }
        },
        mode: {
          css: {
            prefix: ".crypto-icon.%s",
            dimensions: false,
            render: {
              css: true
            },
            example: true
          }
        }
      })
    )
    .pipe(gulp.dest("dist/svg-sprite"));
});

/** fixed wrong svg-sprite output  **/
gulp.task("update-svg-sprite-sample", function() {
  return gulp
    .src("dist/svg-sprite/css/sprite.css.html")
    .pipe(
      cheerio(function($, file) {
        $(".icon-box").each(function() {
          var i = $(this).children();
          var currentClass = i.attr("class");

          i.attr("class", currentClass.split(".").join(" "));
        });
      })
    )
    .pipe(rename("demo.html"))
    .pipe(gulp.dest("dist/svg-sprite/css/"));
});

gulp.task("clean", function() {
  return gulp
    .src("dist/svg-sprite/css/sprite.css.html")
    .pipe(clean({ force: true }));
});

gulp.task("clearn-svg-folder", function() {
  return gulp
    .src("dist/svg-sprite/css/svg", { read: false })
    .pipe(clean({ force: true }));
});

gulp.task(
  "default",
  gulp.series(
    "webfont",
    "clearn-svg-folder",
    "svg-sprite",
    "update-svg-sprite-sample",
    "clean",
    done => {
      done();
    }
  )
);
