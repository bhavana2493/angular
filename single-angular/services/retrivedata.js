angular.module('mainApp').factory('Myservice',function($firebase){
    var service={};
    service.getDatabase=function(callback){
        var ref=firebase.database().ref();
        ref.on("value",function(obj){
            callback(obj.val());
        });
    }
    
    return service;
})