(function(){
'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router',
  'login',
  'activityFeed'
])
.config([
  '$urlRouterProvider', 
  //use this line for Providers
  // 'ActivityProvider',
  function($urlRouterProvider
    //use this line for Providers
    //, ActivityProvider
    ) {
    
    //use this line for Providers
    // ActivityProvider.setAPI('../test/api/posts.json');

    $urlRouterProvider.otherwise('/login');
}]);

})();