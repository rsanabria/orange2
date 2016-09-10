/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
System.config({
  //use typescript for simple compilation (no typechecking)
  //transpiler: 'typescript',
  //typescript compiler options
  //typescriptOptions: {
    //emitDecoratorMetadata: true
  //},
  paths: {
    'npm:': 'node_modules/'
  },
  map: {
    'app': 'app',

    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',


    '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',

    'rxjs': 'npm:rxjs',
    'angular2-materialize': 'npm:angular2-materialize',
    'ng2-file-upload':      'npm:ng2-file-upload',
    '@ngrx':           'npm:@ngrx'
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.js',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    'angular2-materialize' :{
      main: 'dist/materialize-directive',
      defaultExtension: 'js'
      },
    'ng2-file-upload' : {
       main: 'bundles/ng2-file-upload',
       defaultExtension: 'js'
      },
    '@ngrx/core':                 { main: 'index.js',format: 'cjs'},
    '@ngrx/store':                { main: 'index.js',format: 'cjs'},
    '@ngrx/effects':              { main: 'index.js',format: 'cjs'},
    '@ngrx/store-devtools':       { main: 'index.js',format: 'cjs'},
    '@ngrx/store-log-monitor':    { main: 'index.js',format: 'cjs'},
  }
});