(function () {
    'use strict';
    angular.module('mySeedsNG', ['ngRoute', 'ngAnimate'])
        .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });

            // routes
            $routeProvider
                .when("/", {
                    templateUrl: "./partials/home.html",
                    controller: "HomeController"
                })
                .when("/page1", {
                    templateUrl: "./partials/page1.html",
                    controller: "Page1Controller"
                })
                .when("/page2", {
                    templateUrl: "./partials/page2.html",
                    controller: "Page2Controller"
                })
                .when("/error", {
                    templateUrl: "./partials/error.html",
                    controller: "ErrorController"
                })
                .otherwise({
                    redirectTo: '/error'
                });
            }
        ]);

    //Load controller
    angular.module('mySeedsNG')
        .controller('HomeController', ['$scope', '$http', function($scope, $http) {
            $http.get('http://localhost:9000/back-api/version').then(function (response) {
                $scope.apiVersion = response.data;
            }, errorCallback);
            $scope.data = "Home page is loaded !!!";
        }
        ])
        .controller('Page1Controller', ['$scope', function($scope) {
                $scope.data = "Page 1 is loaded !!!";
            }
        ])
        .controller('Page2Controller', ['$scope', function($scope) {
            $scope.data = "Page 2 is loaded !!!";
        }
        ])
        .controller('ErrorController', ['$scope', function($scope) {
            $scope.data = "Page not found !!!";
        }
        ]);
    var successCallback = function ($scope, data) {
        $scope.data = data;
    };
    var errorCallback = function () {
        alert('An error was occurred !!');
    };
}());