'use strict';
var gulp = require('gulp');
var pump = require('pump');
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var svgSprite = require('gulp-svg-sprite');
var fontName = 'cryptocurrency-icons';

gulp.task('webfont', function () {
  pump([
    gulp.src('src/svg/*.svg'),
    iconfontCss({
      fontName: fontName,
      path: 'src/template.css',
      targetPath: 'cryptocurrency-icons.css',
      fontPath: '',
      cssClass: 'crypto-icon'
    }),
    iconfont({
      fontName: fontName,
      prependUnicode: true,
      formats: ['eot', 'ttf', 'woff', 'woff2'],
      normalize: true,
      fontHeight: 1001,
      descent: 200,
     }),
    gulp.dest('dist/webfont/'),
  ]);
});

gulp.task('svg-sprite', function() {
  gulp.src('src/svg/*.svg')
    .pipe(svgSprite({
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
    }))
    .pipe(gulp.dest('dist/svg-sprite/'));
});

gulp.task('default', ['webfont', 'svg-sprite']);