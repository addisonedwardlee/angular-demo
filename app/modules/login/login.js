(function(){
'use strict';

var LoginCtrl = function($state, LoginService, UserData){
  this.userLogin = function(){
    var data = {
      name: this.name,
      password: this.password
    };
    LoginService.login(data, function(){
      console.log(data)
      UserData.name = data.name;
      $state.go('activityFeed');
    });
  };
};

angular
  .module('login', [])

  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'modules/login/login.html',
        controllerAs: 'login',
        controller: 'LoginCtrl'
      });
  }])

  .controller('LoginCtrl', [
    '$state',
    'LoginService',
    'UserData',
    LoginCtrl
  ]);

})();