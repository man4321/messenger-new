'use strict';
//Declare app level module which depends on views, and core components
var app = angular.module("chatApp",["ngRoute","ngMaterial","ngAnimate","ngAria"]);

app.config(function($routeProvider){
	
  $routeProvider.when('/aa',{
     templateUrl: 'components/chat/chat.html',
   
    // controller:'contact-list'
  })
    $routeProvider.when('/',{
    templateUrl: 'components/chat/chat.html',
    controller: 'contact'
   
    // controller:'contact-list'
  })
// .when('/',
// {
//   template: 'blank',
//   controller:'index-controller'
// })
});
