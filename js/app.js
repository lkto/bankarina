// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
      cache: false,
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

    .state('login', {
    cache: false,
    url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

  // Each tab has its own nav history stack:

  .state('tab.inicio', {
    cache: false,
    url: '/inicio',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/tab-inicio.html',
        controller: 'InicioCtrl'
      }
    }
  })

  .state('tab.agregar', {
    url: '/agregar',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/agregar-personas.html',
        controller: 'AgregarCtrl'
      }
    }
  })
  .state('tab.agregarM', {
    cache: false,
    url: '/agregarM',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/agregar-movimientos.html',
        controller: 'AgregarMCtrl'
      }
    }
  })

  .state('tab.ver', {
    cache: false,
    url: '/ver',
    views: {
      'tab-inicio': {
        templateUrl: 'templates/ver-personas.html',
        controller: 'VerCtrl'
      }
    }
  })

  .state('tab.config', {
    url: '/config',
    views: {
      'tab-config': {
        templateUrl: 'templates/tab-config.html',
        controller: 'ConfCtrl'
      }
    }
  });

  

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
