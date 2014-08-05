(function(){
  'use strict';

var ActivityFeedCtrl = function($timeout, ActivityService, UserData, posts){

};

angular
  .module('activityFeed', [])

  .config([
    '$stateProvider',
    function($stateProvider) {
    $stateProvider
      .state('activityFeed', {
        url: '/activityFeed',
        templateUrl: 'modules/activityFeed/activityFeed.html',
        controllerAs: 'activity',
        controller: 'ActivityFeedCtrl'
      });
  }])

  .controller('ActivityFeedCtrl', [
    '$timeout',
    //use this line with Factories/Services
    'ActivityService',
    //use this line with Providers
    // 'Activity',
    'UserData',
    'posts',
    ActivityFeedCtrl
  ]);
})();