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