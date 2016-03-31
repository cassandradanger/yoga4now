myApp.controller('DigestController', ["$scope", "$http", function($scope, $http){

    console.log('yup');

    $scope.digest = [];

    $http.get('/digest').then(function (response) {
        console.log(response.data.digest);

        $scope.digest = response.data.digest;
    });

    $scope.myInterval = 5000;

}]);