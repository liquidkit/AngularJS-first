angular.module("myApp", [])
    .controller("SomeController", function($scope) {

    });

angular.module("myApp")
    .controller("SecondController", function($scope) {

    });

//angular.module("myApp")
//    .directive("myDirective", function() {
//        return {
//            restrict: 'A',
//            scope: true
//        }
//    });

angular.module("myApp")
    .controller("MainController", function($scope) {})
    .directive("myDirective", function() {
        return {
            restrict: 'A',
            scope: {},
            template: '<div>Inside myDirective {{ myProperty }}</div>'
        };
    });