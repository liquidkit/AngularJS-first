angular.module("myApp", ['ngRoute']);

angular.module("myApp")
    .config(['$routeProvider', function() {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html'
                controller: 'HomeController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);