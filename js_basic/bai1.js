var app = angular.module("myapp", []);
// Tinh Tong
app.controller("myctrl", function($scope) {

        $scope.tinhtoan = function() {
            var Tong = 0;
            var a = parseInt($scope.soCuoi);
            for (var i = 1; i <= a; i++) {
                Tong = i + Tong;
            }
            $scope.Tong = Tong;
        }

        $scope.choso = function() {
            var nn = Math.round(Math.random() * 100);
            $scope.soCuoi = nn;


        }

    }



)