myApp.controller('EveningController', ["$scope", "$http", function($scope, $http){

    console.log('evening');

    $scope.evening = [];

    $http.get('/evening').then(function (response) {
        console.log(response.data.evening);

        $scope.evening = response.data.evening;
    });

    $scope.myInterval = 5000;

}]);