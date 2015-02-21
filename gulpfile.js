var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('browserify', function() {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['browserify', 'copy']);
});

gulp.task('server', function() {
  connect.server({
      root: './dist',
      host: 'localhost',
      port: 8080,
      livereload: {
        port: 35929
      }
    });
});


gulp.task('default', ['browserify', 'copy', 'watch', 'server']);
