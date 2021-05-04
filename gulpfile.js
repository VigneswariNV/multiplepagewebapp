const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync').create();


function scssTask(){
  return src('sass/**/*.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(dest('dist', { sourcemaps: '.' }));
}



function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}


function watchTask(){
  watch('*.html', browsersyncReload);
  watch(['sass/**/*.scss'],series(scssTask,browsersyncReload));
}


exports.default = series(
  scssTask,
  browsersyncServe,
  watchTask
);