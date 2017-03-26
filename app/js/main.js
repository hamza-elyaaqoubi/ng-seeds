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
                    templateUrl: "./partials/home.html"
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
}());