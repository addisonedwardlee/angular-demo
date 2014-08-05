(function(){
'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router'
])

.config([
  '$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
  }
]);

})();