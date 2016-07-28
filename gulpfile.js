const gulp   = require('gulp'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename')
      pump   = require('pump')
      
gulp.task('default', [ 'build' ])

gulp.task('build', () => {
  pump([
    gulp.src('main.js'),
    uglify(),
    rename('main.min.js'),
    gulp.dest(__dirname)
  ])
})