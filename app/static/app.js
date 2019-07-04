'use strict';

// Declare app level module which depends on views, and core components
<<<<<<< HEAD
var app=angular.module('myApp', [
=======
var app = angular.module('chatApp', [
>>>>>>> 860f56707ab614fcf4faaa50138038d24b107ff8
  'ngRoute',
  'ngMaterial',
  'ngAnimate',
  'ngAria'
])
<<<<<<< HEAD
app.config(function( '$routeProvider') {
 // $locationProvider.hashPrefix('!');
  $routeProvider.when('/msg', {
  	templateUrl: 'components/chat/chat.html',
    // controller: 'ChatCtrl'
   // controller: 'contact-list'
=======
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.when('/chat', {
  	templateUrl: 'components/chat/chat.html',
    controller: 'friend-list'
>>>>>>> 860f56707ab614fcf4faaa50138038d24b107ff8
  })
  .when('/',{
    templateUrl:'index.html',
    //controller: 'index-controller'
  })

	//.otherwise({redirectTo: '/view1'});
});
