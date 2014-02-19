'use strict';

angular.module('appCalendarioApp', ['ngCookies', 'ngResource', 'ngSanitize',  'ngRoute', 'ui.bootstrap'])

.config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/calendario', {templateUrl: 'views/calendario.html', controller: 'calendarioController'})
      .otherwise({
        redirectTo: '/'
      });
});