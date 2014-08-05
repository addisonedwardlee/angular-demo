(function(){
  'use strict';

var timeConversion = function(){
  return function(time) {
    var system_date = new Date();
    var diff = Math.floor((system_date - time) / 1000);
    if (diff <= 90) return '1m';
    if (diff <= 3540) return Math.round(diff / 60) + 'm';
    if (diff <= 5400) return '1h';
    if (diff <= 86400) return Math.round(diff / 3600) + 'h';
    if (diff <= 129600) return '1d';
    if (diff < 604800) return Math.round(diff / 86400) + 'd';
    else return '1w+';
  };
};

angular
  .module('myApp')
  .filter('timeConversion', timeConversion);
})();