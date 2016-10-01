
    /**
     * System configuration for Angular samples
     * Adjust as necessary for your application needs.
     */
    (function (global) {
      System.config({
        paths: {
          // paths serve as alias
          'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
    map: {
      'app': 'app',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'rxjs': 'npm:rxjs',
      'angular2-materialize': 'npm:angular2-materialize',
      'ng2-file-upload':      'npm:ng2-file-upload',
      '@ngrx':           'npm:@ngrx'
  },
        // packages tells the System loader how to load when no filename and/or no extension
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
    '@ngrx/core': { main: 'bundles/core.umd.js',format: 'cjs'},
    '@ngrx/store':                {main: 'bundles/store.umd.js',format: 'cjs'},
    '@ngrx/effects':              { main: 'index.js',format: 'cjs'},
    '@ngrx/store-devtools':       { main: 'bundles/store-devtools.umd.js',format: 'cjs'},
    '@ngrx/store-log-monitor':    { main: 'bundles/store-log-monitor.umd.js',format: 'cjs'},
  }
      });
    })(this);