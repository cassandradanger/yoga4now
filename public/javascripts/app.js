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
            controller: 'PeriodController'
        }).
        when('/digest', {
            templateUrl: "/views/routes/digest.html",
            controller: 'DigestController'
        }).
        when('/energy', {
            templateUrl: "/views/routes/energy.html",
            //controller: 'EntryController'
        }).
        when('/calming', {
            templateUrl: "/views/routes/calming.html",
            controller: 'CalmingController'
        }).
        otherwise({
            templateUrl: "/views/routes/frontpage.html"
        });
}]);
