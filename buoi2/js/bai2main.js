var app = angular.module("myapp", []);
app.controller("myctrl", myfunc);

function myfunc($scope) {
    $scope.list = noidung;
}