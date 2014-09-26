gulp    = require 'gulp'
gutil   = require 'gulp-util'
coffee  = require 'gulp-coffee'
clean   = require 'gulp-clean'
watch   = require 'gulp-watch'
nodemon = require 'gulp-nodemon'

###
# Gulp Tasks
###

gulp.task 'compile-server', ->
  gulp.src './app/*', read: false
    .pipe clean(force: true)
  gulp.src './source/**/*.coffee'
    .pipe coffee(bare: true).on('error', gutil.log)
    .pipe gulp.dest './app/'


gulp.task 'compile', ->
  gulp.start 'compile-server'


gulp.task 'start-dev-server', ->
  nodemon
    script: './app/app.js'
    ext: 'coffee'
  .on 'change', ['compile']

