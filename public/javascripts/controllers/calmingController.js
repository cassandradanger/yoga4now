myApp.controller('CalmingController', ["$scope", "$http", function($scope, $http){

    console.log('calming');

    $scope.calming = [];

    $http.get('/calming').then(function (response) {
        console.log(response.data.calming);

        $scope.calming = response.data.calming;
    });

    $scope.myInterval = 5000;

}]);