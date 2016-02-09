/**
 * Created by Jacek on 09.02.16.
 */

/**
 * Angular modules, themselves, have the opportunity to configure
 * themselves before the module actually bootstraps and starts to run.
 * We can set up different sets of logic during the bootstrap phase
 * of the app.
 *
 * Angular executes blocks of configuration during the provider
 * registration and configuration phase in the bootstrapping of
 * the module.
 */
angular.module("myApp", [])
    .config(function($provide){

    });

angular.module("myApp")
    .factory("myFactory", function() {
        var service = {};
        return service;
    })
    .directive("myDirective", function() {
        return {
            template: "<button>Click me</button>"
        }
    });

// the above and the below are equivalent

/**
angular.module("myApp", [])
    .config(function($provide, $compileProvider) {
        $provide.factory("myFactory", function() {
           var service = {};
            return service;
        });
        $compileProvider.directive("myDirective",
            function() {
                return {
                    template: "<button>Click me</button>"
                }
            });
    });
*/

angular.module("myApp", [])
    .config(function($routerProvider) {
        $routerProvider.when("/", {
            controller: "WelcomeController",
            template: "views/welcome.html"
        });
    })
    .config(function(ConnectionProvider) {
        ConnectionProvider.setApiKey("SOME_API_KEY")
    });

/**
 * Run blocks are executed after the injector is created.
 * First methods executed in Angular app.
 * Place where set up event listeners for global scale.
 */
angular.module("myApp", [])
    .run(function($rootScope, AuthService) {
        $rootScope.$on("$routeChangeStart",
            function(evt, next, current) {
                // If the user is NOT logged in
                if (!AuthService.userLoggedIn()) {
                    if (next.templateUrl === "login.html") {
                        // Already heading to the login route
                        // so no need to redirect
                    } else {
                        $location.path("/login");
                    }
                }
            }
        );
    });