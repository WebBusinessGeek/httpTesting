/**
 * Created by MacBookEr on 12/29/14.
 */

angular.module('app')
.controller('someController', ['$http', '$scope', function($http, $scope){

        $scope.property = 'happiness man';

        $scope.httpCall = function()
        {
            $http({
                method: 'GET',
                url: 'http://httptesting.local:8000/api/first'
            }).success(function(data)
            {
               $scope.property = data.message;
            })
        }

    }]);