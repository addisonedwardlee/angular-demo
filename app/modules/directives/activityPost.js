(function(){
  'use strict';

var activityPost = function(){
  return {
    restrict: 'E',
    templateUrl: 'modules/directives/activityPost.html',
    scope: {
      post: '='
    },
    link: function(scope, element, attrs){
      
    }
  };
};

angular
  .module('myApp')
  .directive('activityPost', activityPost);

})();