var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var connect = require('gulp-connect');

var distFolder = 'public';

gulp.task('browserify', function() {
  gulp.src('src/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(distFolder + '/js'));
});

gulp.task('copyhtml', function() {
  gulp.src(['src/index.html', 'src/style/**/*.*'])
    .pipe(gulp.dest(distFolder));
});

gulp.task('copycss', function() {
  gulp.src('src/style/**/*.*')
    .pipe(gulp.dest(distFolder + '/style'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['browserify', 'copyhtml', 'copycss']);
});

gulp.task('server', function() {
  connect.server({
    root: distFolder,
    host: 'localhost',
    port: 3000,
    livereload: {
      port: 35929
    }
  });
});


gulp.task('default', ['browserify', 'copyhtml', 'copycss', 'watch', 'server']);
