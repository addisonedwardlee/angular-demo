'use strict';

/* jasmine specs for the activityFeed module go here */

describe('activityFeed module', function(){
  var scope, ctrl;

  beforeEach(angular.mock.module('myApp'));

  beforeEach(inject(function($rootScope, $controller){
    scope = $rootScope.$new();
    ctrl = $controller('ActivityFeedCtrl', { $scope: scope });
  }));

  it('should ....', function() {
    expect(ctrl).toBeDefined();
  });

});
