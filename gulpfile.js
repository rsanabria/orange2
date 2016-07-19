var gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    Builder = require('systemjs-builder'),
    ts = require('gulp-typescript'),
    sourcemaps  = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json');

var src = 'src/'; // where your ts files are, whatever the folder structure in this folder, it will be recreated in the below 'dist/app' folder
var appProd = 'dist/';
var appDev = 'app/'

gulp.task('clean', function () {
  return del('app/**/*');
});

gulp.task('copy:assets', function() {
    /*'index.html', 'styles.css',*/
  return gulp.src(['src/**/*',  '!src/**/*.ts'], { base : '' })
    .pipe(gulp.dest('app/'))
});


/** first transpile your ts files */
gulp.task('ts', () => {
    return gulp.src([src + '/**/*.ts','typings/**/*.ts'])
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(appDev));
});

/** then bundle */
gulp.task('bundle', function() {
    // optional constructor options
    // sets the baseURL and loads the configuration file
    var builder = new Builder('', 'systemjs.config.js');

    /*
       the parameters of the below buildStatic() method are:
           - your transcompiled application boot file (the one wich would contain the bootstrap(MyApp, [PROVIDERS]) function - in my case 'dist/app/boot.js'
           - the output (file into which it would output the bundled code)
           - options {}
    */
    return builder
        .buildStatic(appDev + 'main.js', appProd + 'bundle.js', { minify: false, sourceMaps: true})
        .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});

/** this runs the above in order. uses gulp4 */
gulp.task('build', gulp.series(['clean','ts', 'copy:assets','bundle']));