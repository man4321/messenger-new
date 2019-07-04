'use strict';

// Declare app level module which depends on views, and core components
var app=angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate',
  'ngAria'
])
app.config(function( '$routeProvider') {
 // $locationProvider.hashPrefix('!');
  $routeProvider.when('/msg', {
  	templateUrl: 'components/chat/chat.html',
    // controller: 'ChatCtrl'
   // controller: 'contact-list'
  })
  .when('/',{
    templateUrl:'index.html',
    //controller: 'index-controller'
  })

	//.otherwise({redirectTo: '/view1'});
});
