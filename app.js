var mainApp=angular.module("mainApp ",['ngRoute']);
            mainApp.config(['$routeProvider',function($routeProvider){
              $routeProvider.
              when('/addName',{
                  templateUrl:'addName.htm',
                  controller:'AddNameController'                                                                                                                           
              }).
              when('/viewName',{
                  templateUrl:'viewName.htm',
                  controller:'ViewNameController'
              }).
              otherwise({
                  redirectTo:'/addName'
              });  
            }]);