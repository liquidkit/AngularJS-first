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
    });