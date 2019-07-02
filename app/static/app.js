'use strict';

// Declare app level module which depends on views, and core components
angular.module('chatApp', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate',
  'ngAria'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/chat', {
  	templateUrl: '/components/chat/chat.html'
    // controller: 'ChatCtrl'
    //controller: 'friend-list'
  })
  .when('/', {
  	template: '<center><h1>This is blank page<h1></center>'
  })
	//.otherwise({redirectTo: '/view1'});
}]);
