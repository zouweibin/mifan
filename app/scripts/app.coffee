"use strict"

Mifan.config ($routeProvider, $locationProvider) ->
  $locationProvider.html5Mode(false).hashPrefix "!"
  $routeProvider
    .when("/",
      redirectTo: "/home"
    )
    .when("/home",
      templateUrl: "views/home.html"
      controller: "homeCtrl"
    )
    .when("/msg",
      templateUrl: "views/msg.html"
      controller: "msgCtrl"
    )
    .when("/me",
      templateUrl: "views/me.html"
      controller: "meCtrl"
    )
    .when("/welcome",
      templateUrl: "views/welcome.html"
      controller: "welcomeCtrl"
    )
    .otherwise
      templateUrl: "views/404.html"
      controller: "404Ctrl"

  no