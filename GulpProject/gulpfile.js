const gulp = require('gulp');
const sass = require('gulp-sass');

//CSS
const autoprefixer = require('gulp-autoprefixer');
const gulpminifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');


const browserSync = require('browser-sync');
const reload = browserSync.reload;


const config = {
  server: {
    baseDir: './',
  },
  host: 'localhost',
  port: 9000,
};

gulp.task('browserSync', function() {
  browserSync(config);
});

gulp.task('sass', function() {
 gulp.src('./sass/main.scss')
 .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
 .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
 .pipe(sass())
 .pipe(plumber.stop())
 .pipe(gulp.dest('./build/css/'))
 .pipe(reload({stream: true}));
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

gulp.task('default', ['build', 'browserSync', 'watch']);
