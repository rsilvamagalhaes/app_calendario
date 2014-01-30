'use strict';

angular.module('appCalendarioApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])

.config(function ($routeProvider) {
    $routeProvider
      .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
      .when('/calendario', {templateUrl: 'views/calendario.html', controller: 'calendarController'})
      .otherwise({
        redirectTo: '/'
      });
});
