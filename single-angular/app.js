var mainApp=angular.module("mainApp",['ui.router','firebase']);
            mainApp.config(function($stateProvider,$urlRouterProvider){
              $urlRouterProvider.otherwise('/home');
              $stateProvider
              .state('home',{
                  url:'/home',
                  templateUrl:'templates/product.htm',
                  controller:'prodctrl'                                                                                                                           
              })
              
              });  