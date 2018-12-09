const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
  gulp.src('./style.scss')
  .pipe(sass())
  .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
  console.log('hellow');
  gulp.watch('./style.scss', ['sass']);
});


//console.log()