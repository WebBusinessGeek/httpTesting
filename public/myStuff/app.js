/**
 * Created by MacBookEr on 12/29/14.
 */

var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider' ,function($routeProvider){
    $routeProvider
        .when('/somepage/',
        {
            templateUrl: 'mystuff/someTemplate.html',
            controller: 'someController'
        });

}]);