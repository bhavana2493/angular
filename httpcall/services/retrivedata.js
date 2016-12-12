angular.module('mainApp').factory('Myservice', function ($http, $log, $q) {

  // service.getdata = function (callback) {
  //   $http.get("products.json")
  //   .then(function (response) {
  //     console.log(response.data);
  //     callback(response.data);
  //   });
  // }
  return {
    getdata: function () {
      var deferred = $q.defer();
      $http.get('products.json')
        .success(function (data) {
          deferred.resolve(data);

        }).error(function (msg, code) {
          deferred.reject(msg);

          $log.error(msg, code);
        });
      return deferred.promise;
    }
  }

});