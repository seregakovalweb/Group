const gulp = require('gulp');
const sass = require('gulp-sass');

//CSS
const gulpminifycss = require('gulp-minify-css');
const rename = require('gulp-rename');



gulp.task('sass', function() {
 gulp.src('./sass/main.scss')
 .pipe(sass())
 .pipe(gulp.dest('./build/css/'));
});

gulp.task('css', function() {
  gulp.src('./build/css/main.css')
  .pipe(gulpminifycss())
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('./build/css'));
})

gulp.task('watch', function(){
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('build', ['sass','css']);





