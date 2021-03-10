const gulp = require('gulp'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    cleanCss = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

sass.compiler = require("node-sass");

// Paths
const path = {
    src: {
        scss: './src/scss/**/*.scss',
        js: './src/js/*.js',
        img: './src/img/*'
    },
    dist: {
        css: './dist/style.css',
        js: './dist/script.js',
        img: './dist/img',
        self: './dist/'
    }
}

// Functions
const cleanDist = () => gulp.src(path.dist.self, {allowEmpty: true}).pipe(clean());

const distCss = () => (
    gulp.src(path.src.scss)
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream())
);

const distJs = () => (
    gulp.src(path.src.js)
        .pipe(concat('script.js'))
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.stream())
);

const distImg = () => (
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img))
        .pipe(browserSync.stream())
);

// Tasks
gulp.task('clean', cleanDist);
gulp.task('distCss', distCss);
gulp.task('distJs', distJs);
gulp.task('distImg', distImg);