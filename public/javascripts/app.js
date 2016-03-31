var myApp = angular.module('myApp',['ngRoute', 'appControllers', 'angular-carousel', 'ui.bootstrap']);

var appControllers = angular.module('appControllers',[]);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/headache', {
            templateUrl: "/views/routes/headache.html",
            //controller: 'EntryController'
        }).
        when('/stress', {
            templateUrl: "/views/routes/stress.html",
            controller: 'StressController'
        }).
        when('/backache', {
            templateUrl: "/views/routes/backache.html",
            controller: 'BackacheController'
        }).
        when('/stretch', {
            templateUrl: "/views/routes/stretch.html",
            //controller: 'EntryController'
        }).
        when('/period', {
            templateUrl: "/views/routes/period.html",
            //controller: 'EditController'
        }).
        when('/digest', {
            templateUrl: "/views/routes/digest.html",
            controller: 'DigestController'
        }).
        when('/morning', {
            templateUrl: "/views/routes/morning.html",
            //controller: 'EntryController'
        }).
        when('/evening', {
            templateUrl: "/views/routes/evening.html",
            controller: 'EveningController'
        }).
        otherwise({
            templateUrl: "/views/routes/frontpage.html"
        });
}]);
