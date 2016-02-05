angular.module("myApp", [])
    .directive("sidebox", function() {
        return {
            restrict: 'EA',
            scope: {
                title: '@'
            },
            transclude: true,
            template: '<div class="sidebox"> <div class="content"> <h2>{{ title }}</h2> <span class="content" ng-transclude></span> </div> </div>'
        };
    });

angular.module("myApp")
    .controller("MainControllerNoScope", function() {
        this.name = "Ari";
    });

angular.module("myApp")
    .directive("myDirectiveAnonymousController", function() {
        return {
            restrict: 'A',
            template: '<h4>{{ myController.msg }}</h4>',
            controllerAs: 'myController',
            controller: function() {
                this.msg = "Hello World"
            }
        };
    });