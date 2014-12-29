/**
 * Created by MacBookEr on 12/29/14.
 */
angular.module('app')
.service('httpClient', function($http){
        //$http.get('http://httptesting.local:8000/api/first')
        //    .success(function(data){
        //    console.log(data);
        //});

        //$http({
        //    method: 'GET',
        //    url: 'http://httptesting.local:8000/api/first',
        //    responseType: 'json'
        //}).success(function(data){
        //    console.log(data);
        //});


        this.someTest = function ()
        {
            return $http({
                method: 'GET',
                url: 'http://httptesting.local:8000/api/first'
                //responseType: 'json'
            }).success(function(data){
                return data;
            });

        }
    });