angular.module('mainApp').controller('prodctrl2', function ($scope, $firebase, Myservice, $timeout,filterFilter) {
    var items;
    $scope.product={};
    $scope.usemanufact={};
    $scope.useos={};
    $scope.usestorage={};
    $scope.usecamera={};
    $scope.usespecs=[];
     function myPromise() {
        return new Promise(function (resolve, reject) {
                Myservice.getDatabase(function(database){
               items=database;
               $timeout(function(){$scope.product=items;},1000);
               resolve();
            })
            });
        }
        myPromise().then(function(){
           
        })
});