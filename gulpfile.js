'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
 var sassFiles = 'src/assets/css/sass/**/*.scss',  
    cssDest = 'src/assets/css/';
gulp.task('default', function(){  
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});