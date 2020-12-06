// Import Required Packages //
// ------------------------------
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-dart-sass');
const pug = require('gulp-pug');
const del = require('del');
const concat = require('gulp-concat');
var header = require('gulp-header');
const merge = require('merge-stream');
const cleanCSS = require('gulp-clean-css');
const { series } = require('gulp');


// Constants //
// ------------------------------

/* Directories */
const dirs = {
    app: 'src/',
    assets: 'assets/',
    dist: 'dist/'
};

/* Paths */
const paths = {
    app: {
        assets: dirs.app + dirs.assets,
        scss: dirs.app + dirs.assets + 'scss/',
        css: dirs.app + dirs.assets + 'css/',
        js: dirs.app + dirs.assets + 'js/',
        vendors: dirs.app + dirs.assets + 'vendors/',
        fonts: dirs.app + dirs.assets + 'fonts/',
        images: dirs.app + dirs.assets + 'images/'
    },
    dist: {
        assets: dirs.dist + dirs.assets,
        css: dirs.dist + dirs.assets + 'css/',
        js: dirs.dist + dirs.assets + 'js/',
        fonts: dirs.dist + dirs.assets + 'fonts/',
        images: dirs.dist + dirs.assets + 'images/'
    }
}

/* Stamp Branding */
const app = require('./package.json');
const banner = [
    '/*!',
    ` * ${app.name} - ${app.version}`,
    ` * @author ${app.author} - ${app.repository.url} `,
    ` * Copyright (c) ${new Date().getFullYear()}`,
    ' */',
    ''].join('\n');


// Intial Setup & Vendor Tasks //
// ------------------------------

gulp.task('cleanBuild', () => {
    return del([paths.app.css, paths.app.vendors, paths.dist.assets]);
});
gulp.task('cloneVendorSCSS', () => {
    var style1 = gulp.src('./node_modules/bootstrap/dist/css/**').pipe(gulp.dest('./src/assets/vendors/bootstrap/css'));
    var style2 = gulp.src('./node_modules/bootstrap-vue/dist/*.css').pipe(gulp.dest('./src/assets/vendors/bootstrap-vue/css'));
    return merge(style1,style2);
});

gulp.task('initialSetup', series('cleanBuild','cloneVendorSCSS'));


// Build Files //
// ------------------------------

gulp.task('buildVendorCSS', () => {
    return gulp.src(['./src/assets/vendors/bootstrap/css/bootstrap.css','./src/assets/vendors/bootstrap-vue/css/bootstrap-vue.css', './src/assets/css/**.css'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('vendors.min.css'))
    .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('buildThemeCSS', () => {
    return gulp.src(['./src/assets/scss/style.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('buildCoreFiles', series('buildVendorCSS','buildThemeCSS'));

// Full Build //
// ------------------------------

gulp.task('mainBuild', series('initialSetup','buildCoreFiles'));
