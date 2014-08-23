var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var colors = require('colors');

gulp.task('css', function() {
  return gulp.src('./src/*.css')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function() {
  return gulp.src('./src/*.js')
    .pipe(concat('swipe-li.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('example', function() {
  return gulp.src('./dist/*.*')
    .pipe(gulp.dest('./example/swipe-li'));
});

gulp.task('build', ['js', 'css', 'example']);

gulp.task('dev', function() {
  // Start a server
  connect.server({
    root: 'example',
    port: 3000,
    livereload: true
  });
  console.log('[CONNECT] Listening on port 3000'.yellow.inverse);

  // Watch HTML files for changes
  console.log('[CONNECT] Watching HTML, JS and CSS files for live-reload'.blue);
  watch({
    glob: ['./src/**/*.*', './example/**/*.*', './example/*.*']
  })
    .pipe(connect.reload());

	// Watch src files to rebuild
  gulp.watch('./src/*.*', ['build']);
});