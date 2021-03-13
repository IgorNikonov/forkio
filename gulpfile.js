const gulp = require('gulp'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  uglify = require('gulp-uglify'),
  cleanCss = require('gulp-clean-css'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  imagemin = require('gulp-imagemin'),
  babel = require('gulp-babel');

sass.compiler = require("node-sass");

// Paths
const paths = {
  html: './index.html',
  src: {
    scss: './src/scss/**/*.scss',
    js: './src/js/*.js',
    img: './src/img/*'
  },
  dist: {
    jsAndCss: './dist/',
    img: './dist/img/',
    self: './dist/'
  }
}

// Functions
const cleanDist = () => gulp.src(paths.dist.self, { allowEmpty: true }).pipe(clean());

const buildCss = () => (
  gulp.src(paths.src.scss)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(cleanCss({ compatibility: 'ie8' }))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest(paths.dist.jsAndCss))
    .pipe(browserSync.stream({stream: true}))
);

const buildJs = () => (
  gulp.src(paths.src.js)
    .pipe(concat('scripts.min.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify({ toplevel: true }))
    .pipe(gulp.dest(paths.dist.jsAndCss))
    .pipe(browserSync.stream({stream: true}))
);

const buildImg = () => (
  gulp.src(paths.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.dist.img))
    .pipe(browserSync.stream({stream: true}))
);

async function build () {
  gulp.series(cleanDist, gulp.parallel(buildCss, buildJs, buildImg))
}

const dev = () => {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });

  gulp.watch(paths.src.scss, buildCss).on('change', browserSync.reload);
  gulp.watch(paths.src.js, buildJs).on('change', browserSync.reload);
  gulp.watch(paths.src.img, buildImg).on('change', browserSync.reload);
  gulp.watch(paths.html, build).on('change', browserSync.reload);
}

// Tasks
gulp.task('clean', cleanDist);
gulp.task('buildCss', buildCss);
gulp.task('buildJs', buildJs);
gulp.task('buildImg', buildImg);


// Main tasks
gulp.task('build', build);
gulp.task('dev', dev);

gulp.task('default', dev);