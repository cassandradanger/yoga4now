myApp.controller('PeriodController', ["$scope", "$http", function($scope, $http){

    console.log('yup');

    $scope.period = [];

    $http.get('/period').then(function (response) {
        console.log(response.data.period);

        $scope.period = response.data.period;
    });

    $scope.myInterval = 5000;

}]);