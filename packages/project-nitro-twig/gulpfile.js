'use strict';

const gulp = require('gulp');
const getTask = require('./gulp/utils').getTask;
const gulpSequence = require('gulp-sequence').use(gulp);
const config = require('config');
require('nitro-exporter')(gulp, config);

gulp.task('sync-githooks', getTask('sync-githooks'));
gulp.task('compile-css', getTask('compile-css'));
gulp.task('compile-css-proto', getTask('compile-css-proto'));
gulp.task('compile-templates', getTask('compile-templates'));
gulp.task('compile-js', ['compile-templates'], getTask('compile-js'));
gulp.task('compile-js-proto', getTask('compile-js-proto'));
gulp.task('minify-css', ['compile-css'], getTask('minify-css'));
gulp.task('minify-js', ['compile-js'], getTask('minify-js'));
gulp.task('minify-img', getTask('minify-img'));
gulp.task('svg-sprite', getTask('svg-sprite'));
gulp.task('copy-assets', getTask('copy-assets'));
gulp.task('clean-assets', getTask('clean-assets'));
gulp.task('clean-templates', getTask('clean-templates'));
gulp.task('assets', ['svg-sprite', 'copy-assets', 'minify-img', 'minify-js', 'minify-css']);
gulp.task('assets-proto', ['compile-css-proto', 'compile-js-proto']);
gulp.task('watch-assets', ['assets', 'assets-proto'], getTask('watch-assets'));
gulp.task('serve', getTask('serve'));
gulp.task('watch-serve', ['serve'], getTask('watch-serve'));
gulp.task('develop', ['watch-assets', 'watch-serve']);
gulp.task('build', gulpSequence(['clean-assets', 'clean-templates'], 'assets'));
gulp.task('production', gulpSequence(['assets', 'assets-proto'], 'serve'));
gulp.task('dump-views', getTask('dump-views'));
gulp.task('lint-accessibility', ['dump-views'], getTask('lint-accessibility'));
gulp.task('lint-html', ['dump-views'], getTask('lint-html'));
gulp.task('visual-approve', getTask('visual-approve'));
gulp.task('visual-reference', ['assets'], getTask('visual-reference'));
gulp.task('visual-test', ['assets'], getTask('visual-test'));
gulp.task('test', ['compile-css', 'compile-js'], getTask('test'));
