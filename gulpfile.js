var gulp = require('gulp'),
    path = require('path'),
    del = require('del'),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten'),
    Builder = require('systemjs-builder'),
     tsc = require('typescript'),
    ts = require('gulp-typescript'),
    sourcemaps  = require('gulp-sourcemaps');

var tsProject = ts.createProject('tsconfig.json');

var src = 'src/'; // where your ts files are, whatever the folder structure in this folder, it will be recreated in the below 'dist/app' folder
var appProd = 'dist/';
var appDev = 'app/'

gulp.task('clean', function () {
  return del('app/**/*');
});

gulp.task('clean:prod', function () {
    return del(['dist/**/*','!dist/index.html']);
})

gulp.task('copy:assets', function() {
    /*'index.html', 'styles.css',*/
  return gulp.src(['src/**/*',  '!src/**/*.ts'], { base : '' })
    .pipe(gulp.dest('app/'))
});
gulp.task('copy:assets:prod', function() {
    /*'index.html', 'styles.css',*/
  return gulp.src(['src/**/*',  '!src/**/*.ts'], { base : '' })
   .pipe(flatten())
    .pipe(gulp.dest('dist/'))
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
    var builder = new Builder('', 'systemjs.config.js' );

    /*
       the parameters of the below buildStatic() method are:
           - your transcompiled application boot file (the one wich would contain the bootstrap(MyApp, [PROVIDERS]) function - in my case 'dist/app/boot.js'
           - the output (file into which it would output the bundled code)
           - options {}
    */
    return builder
        .buildStatic(appDev + 'main.js', appProd + 'js/app.min.js', { minify: true, sourceMaps: true})
        .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});

gulp.task('bundle:libs', function () {

    gulp.src(['node_modules/rxjs/**/*'])
        .pipe(gulp.dest('dist/js/rxjs'));

    gulp.src(['node_modules/@ngrx/core/**/*'])
        .pipe(gulp.dest('dist/js/@ngrx/core'));

    gulp.src(['node_modules/@ngrx/store/**/*'])
        .pipe(gulp.dest('dist/js/@ngrx/store'));

    gulp.src(['node_modules/@ngrx/effects/**/*'])
        .pipe(gulp.dest('dist/js/@ngrx/effects'));

    gulp.src(['node_modules/@ngrx/store-log-monitor/**/*'])
        .pipe(gulp.dest('dist/js/@ngrx/store-log-monitor'));

    gulp.src(['node_modules/@ngrx/store-dev-tools/**/*'])
        .pipe(gulp.dest('dist/js/@ngrx/store-dev-tools'));
        
    gulp.src(['node_modules/angular2-materialize/dist/**/*'])
        .pipe(gulp.dest('dist/js/angular2-materialize/'));

    gulp.src(['node_modules/materialize-css/dist/**/*'])
        .pipe(gulp.dest('dist/css/materialize'));
 
    gulp.src([
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
         'node_modules/systemjs/dist/system.src.js',
        'node_modules/materialize-css/dist/js/materialize.min.js',
        'systemjs.config.js',
      ])
        .pipe(concat('vendors.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/js/'));

          gulp.src([
        'node_modules/core-js/client/shim.min.js.map',
        'node_modules/reflect-metadata/Reflect.js.map'
]).pipe(gulp.dest('dist/js'));

        return gulp.src(['node_modules/@angular/**/*'])
.pipe(gulp.dest('dist/js/@angular'));
});


/** this runs the above in order. uses gulp4 */
gulp.task('dev', gulp.series(['clean','ts', 'copy:assets']));

gulp.task('build', gulp.series(['clean:prod','ts','copy:assets:prod', 'bundle:libs', 'bundle']));