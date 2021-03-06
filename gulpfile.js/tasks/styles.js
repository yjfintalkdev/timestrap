const gulp = require('gulp');

const concat = require('gulp-concat');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const strip = require('gulp-strip-css-comments');


gulp.task('styles', ['styles:vendor', 'styles:sass']);


gulp.task('styles:vendor', function() {
    return gulp.src([
        'node_modules/font-awesome/css/font-awesome.min.css',
        'node_modules/tether/dist/css/tether.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/select2/dist/css/select2.min.css',
        'node_modules/pickadate/lib/compressed/themes/default.css',
        'node_modules/pickadate/lib/compressed/themes/default.date.css',
        'node_modules/jquery.growl/stylesheets/jquery.growl.css'])
        .pipe(strip())
        .pipe(concat('bundle-vendor.css'))
        .pipe(gulp.dest('timestrap/static/css/'));
});


gulp.task('styles:sass', function() {
    return gulp.src('timestrap/static_src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('bundle-scss.css'))
        .pipe(gulp.dest('timestrap/static/css/'));
});
