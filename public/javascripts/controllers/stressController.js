myApp.controller('StressController', ["$scope", "$http", function($scope, $http){

    console.log('stress');

    $scope.stress = [];

    $http.get('/stress').then(function (response) {
        console.log(response.data.stress);

        $scope.stress = response.data.stress;
    });

    $scope.myInterval = 5000;

}]);