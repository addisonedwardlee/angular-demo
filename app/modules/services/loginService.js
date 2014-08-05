(function(){
'use strict';

var LoginService = function(){
  this.login = function(data, callback){
    //something with the data
    callback();
  };
};

angular
  .module('myApp')
  .service('LoginService', [
    LoginService
  ]);


})();