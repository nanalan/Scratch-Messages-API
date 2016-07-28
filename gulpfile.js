const gulp   = require('gulp'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename')
      pump   = require('pump')

gulp.task('default', cb => {
  pump([
    gulp.src('main.js'),
    uglify(),
    rename('main.min.js'),
    gulp.dest(__dirname)
  ], cb)
})

gulp.task('watch', () => {
  gulp.watch('main.js', ['default'])
})
