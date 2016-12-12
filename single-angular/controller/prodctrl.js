angular.module('mainApp').controller('prodctrl', function ($scope, $firebase, Myservice, $timeout,filterFilter) {
    var items;
    $scope.product={};
    $scope.usemanufact={};
    $scope.useos={};
    $scope.usestorage={};
    $scope.usecamera={};
    $scope.usespecs=[];
   
    myPromise().then(function(){
         
        //  console.log(items);
         items.forEach(function(value){
            //  console.log(value.specs);
             $scope.usespecs.push(value.specs);
             })
             console.log($scope.usespecs);
               // Watch the product that are selected

    $scope.$watch(function () {
        return {
            product: $scope.product,
            usespecs:$scope.usespecs,
            usemanufact: $scope.usemanufact,
            usestorage: $scope.usestorage,
            useos: $scope.useos,
            usecamera:$scope.usecamera
        }
    }, function (value) {
        var selected;
        
        $scope.manufacturerGroup = uniqueItems($scope.usespecs, 'manufacturer');
        var filterAftermanufact = [];        
        selected = false;
        for (var j in $scope.usespecs) {
            var p = $scope.usespecs[j];
            for (var i in $scope.usemanufact) {
                if ($scope.usemanufact[i]) {
                    console.log("i:"+i)
                    selected = true;
                    if (i == p.manufacturer) {$scope.product=items;
                        filterAftermanufact.push(p);
                        break;
                    }
                }
            }        
        }
        if (!selected) {
            filterAftermanufact = $scope.usespecs;
        }

        $scope.storageGroup = uniqueItems(filterAftermanufact, 'storage');
        var filterAfterStorage = [];        
        selected = false;
        for (var j in filterAftermanufact) {
            var p = filterAftermanufact[j];
            for (var i in $scope.usestorage) {
                if ($scope.usestorage[i]) {
                    selected = true;
                    if (i == p.storage) {
                        filterAfterStorage.push(p);
                        break;
                    }
                }
            }       
        }
        // console.log("manufacturer:"+$scope.storageGroup);
        if (!selected) {
            filterAfterStorage = filterAftermanufact;
        }
        $scope.osGroup = uniqueItems(filterAfterStorage, 'os');
        var filterAfterOs = [];        
        selected = false;
        for (var j in filterAfterStorage) {
            var p = filterAfterStorage[j];
            for (var i in $scope.useos) {
                if ($scope.useos[i]) {
                    selected = true;
                    if (i == p.os) {
                        filterAfterOs.push(p);
                        break;
                    }
                }
            }       
        }
        if (!selected) {
            filterAfterOs = filterAfterStorage;
        }
        $scope.cameraGroup = uniqueItems(filterAfterOs, 'camera');
        var filterAftercamera = [];        
        selected = false;
        for (var j in filterAfterOs) {
            var p = filterAfterOs[j];
            for (var i in $scope.usecamera) {
                if ($scope.usecamera[i]) {
                    selected = true;
                    if (i == p.camera) {
                        filterAftercamera.push(p);
                        break;
                    }
                }
            }    
        }
        if (!selected) {
            filterAftercamera = filterAfterOs;
        }        

        // $scope.filteredspecs = filterAftercamera;
        // console.log($scope.filteredspecs)
        var prodlist=[];
         items.forEach(function(value){
           filterAftercamera.forEach(function(filvalue){
               if(value.id==filvalue.id){
                   prodlist.push(value);
               }
           })
       })
       $scope.filteredproduct=prodlist;
       }, true);
        })
     $scope.dispSingle=function(item){
         console.log(item);
         $scope.single=item;
     }
        function myPromise() {
        return new Promise(function (resolve, reject) {
                Myservice.getDatabase(function(database){
               items=database;
               $timeout(function(){$scope.product=items;},1000);
            console.log('in display function');
            // $scope.product=items;
            console.log($scope.product);
               resolve();
            })
            });
        }
    

});
var uniqueItems = function (data, key) {
    var result = new Array();
    console.log(result)
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    console.log(result)
    return result;
};
