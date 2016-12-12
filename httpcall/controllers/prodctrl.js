angular.module('mainApp').controller('prodctrl', function ($scope, Myservice, $log, $http) {
    // $scope.product = {};
    // function myPromise() {
    //       return new Promise(function (resolve, reject) {
    // Myservice.getdata(function (data) {
    //       $scope.product = data;
    //       console.log($scope.product);
    // });

    //       resolve();
    // });
    // }
    // myPromise().then(function () {

    //       console.log($scope.product)
    // });
    var promise = Myservice.getdata();
    promise.then(function (data) {
        $scope.product = data;
        console.log($scope.product);
    });
    $scope.SendData = function () {
        // use $.param jQuery function to serialize data from JSON 
        //     var x = $scope.id;
        var id = $scope.id;
        //        name : $scope.name
        // }
        $http({
            url: 'products.json',
            method: "POST",
            data: id,
            'Content-Type': 'application/x-www-form-urlencoded'
        }).success(function (data, status, headers, config) {
            console.log(data.id)
            if (data.id ==id) {
                console.log(data);
                $scope.PostDataResponse = data;
            }

        });
    }
    //     $http.post('http://jsonplaceholder.typicode.com/users' + "/" + id).then(function(data, status, headers, config) {
    // 			$scope.message = data;
    //                   console.log($scope.message);
    // 		})
    // $http.get( 'http://jsonplaceholder.typicode.com/users?id='+$routeParams.id, { cache: true})
    //         .then(function(res){
    //             //....
    //             console.log(res)
    //         })

    // $http({
    //                  method: "POST",
    //                  url: 'http://jsonplaceholder.typicode.com/users' + '/' + 1,
    //                   data: { 'id' : 1 },
    //             //      data: credentials1,
    //                  headers: {"Content-type": 'application/x-www-form-urlencoded'}
    //              }).success(function (data, status, headers, config) {
    //                  $scope.data = data;
    //                  console.log($scope.data);
    //                  $scope.y = true;
    //                  $scope.searchButtonText = "Submit";
    //                  $scope.modelx = true;
    //              }, function (error) {

    //                  alert(error);
    //                  //}
    // });
    // .error(function(data, status, headers, config) {
    // 	alert( "failure message: " + JSON.stringify({data: data}));
    // });		
    // Making the fields empty
    //
    // $scope.name='';
    // $scope.employees='';
    // $scope.headoffice='';
    // };
});