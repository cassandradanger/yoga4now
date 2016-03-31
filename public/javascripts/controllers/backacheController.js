myApp.controller('BackacheController', ["$scope", "$http", function($scope, $http){

    console.log('yup');

    $scope.backache = [];

    $http.get('/backache').then(function (response) {
        console.log(response.data.backache);

        $scope.backache = response.data.backache;
    });

    $scope.myInterval = 5000;

}]);