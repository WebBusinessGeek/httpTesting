/**
 * Created by MacBookEr on 12/29/14.
 */

angular.module('app')
.controller('someController', ['httpClient', '$scope', function(httpClient, $scope){

        $scope.happy = 'happiness man';

        $scope.tester = function()
        {
            data = httpClient.someTest();
            console.log(data);
        }

    }]);