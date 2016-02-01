angular.module('myApp', [])
    .controller('EquationController', function($scope) {
        $scope.equation = {};
        $scope.change = function() {
            $scope.equation.output =
                Number($scope.equation.x) + 2;
        };
    });

angular.module('myApp')
    .controller('FormController', function($scope) {
        $scope.xFields = [
            {placeholder: 'Username', isRequired: true},
            {placeholder: 'Password', isRequired: true},
            {placeholder: 'Email (optional)', isRequired: false}
        ];

        $scope.submitForm = function() {
            alert("it works!")
        };

        $scope.person = {
            name: null
        };

        $scope.people = [];

        $scope.submit = function() {
            if ($scope.person.name) {
                $scope.people.push({name: $scope.person.name});
                $scope.person.name = '';
            }
        };
    });

angular.module('myApp')
    .controller('CounterController', function($scope) {
        $scope.decrement = function() {
            $scope.count = $scope.count - 1;
        };
    });

angular.module('myApp')
    .controller('CityController', function($scope) {
        $scope.cities = [
            {name: 'Seattle'},
            {name: 'San Francisco'},
            {name: 'Chicago'},
            {name: 'New York'},
            {name: 'Boston'}
        ];
    });

angular.module("myApp")
    .controller("LotteryController", function($scope) {
        $scope.generateNumber = function() {
            return Math.floor((Math.random()*10)+1);
        };
    });