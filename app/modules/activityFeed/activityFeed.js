(function(){
  'use strict';

//we leave the name ActivityService here for simplicity, but
//it should actually be Activity if you're using a Provider
var ActivityFeedCtrl = function($timeout, ActivityService, UserData, posts){
  this.getActivities = function(){
    var self = this;
    $timeout(function(){
      ActivityService.getAll()
      .then(function(response){
        self.posts = response.data;
      });
    }, 2000);
  };
  // this.getActivities();
  this.user = UserData.name;

  this.posts = posts;
};

ActivityFeedCtrl.resolve = {
  posts: [
    //use this line with Factories/Services
    'ActivityService',
    function(ActivityService){
      return ActivityService.getAll()
        .then(function(response){
          return response.data;
        });
    }]
    //use this line with Providers
    // 'Activity',
    // function(Activity){
    //   return Activity.getAll()
    //     .then(function(response){
    //       return response.data;
    //     });
    // }]
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
        controller: 'ActivityFeedCtrl',
        resolve: ActivityFeedCtrl.resolve
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