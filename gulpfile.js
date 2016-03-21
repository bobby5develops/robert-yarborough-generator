var fs = require('fs'),
    path = require('path'),
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    header = require('gulp-header'),
    rename = require('gulp-rename');

var banner = [
    '/*!\n' +
    ' * <%= pkg.name %>\n' +
    ' * <%= pkg.title %>\n' +
    ' * <%= pkg.url %>\n' +
    ' * @author <%= pkg.author %>\n' +
    ' * @version <%= pkg.version %>\n' +
    ' * Copyright ' + new Date().getFullYear() + '. <%= pkg.license %> licensed.\n' +
    ' */',
    '\n'
].join('');

// Load all gulp plugins automatically
// and attach them to the `plugins` object
var plugins = require('gulp-load-plugins')();
var pkg = require('./package.json');
var dirs = pkg['h5bp-configs'].directories;


// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------

var input = 'src/scss/main.scss';
var output = 'dist/css';
gulp.task('css', function () {
    return gulp.src(input)
        // Run sass on those files
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer('last 4 version'))
        .pipe(gulp.dest(output))
        .pipe(rename({ suffix: '.min' }))
        .pipe(header(banner, { pkg : pkg }))
        // Write the resulting css to the output directory
        .pipe(gulp.dest(output))
        .pipe(browserSync.reload({ stream:true }));
});

gulp.task('js', function() {
    gulp.src('src/js/main.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(header(banner, { pkg : pkg }))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(header(banner, { pkg : pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({ stream:true, once: true }));
});

gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

/*gulp.task('build', function (done) {
    runSequence(
        ['clean', 'lint:js'], 'copy',
        done);
});*/

/*
gulp.task('archive', function (done) {
    runSequence(
        'build',
        'archive:create_archive_dir',
        'archive:zip',
    done);
});*/



gulp.task('default', ['css', 'js', 'browser-sync'], function (done) {
    gulp.watch('src/scss/*/*.scss', ['css']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('dist/*.html', ['bs-reload']);
});
