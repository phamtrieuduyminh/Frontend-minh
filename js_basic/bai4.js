app.controller("myctrl4", function($scope) {

        $scope.tinhtoan = function() {
            var Tong = 0;

            var a = parseInt($scope.soCuoi);
            for (var i = 1; i <= a; i++) {
                Tong += Math.pow(a, i);
            }
            $scope.Tong = Tong;
        }

        $scope.choso = function() {
            var nn = Math.round(Math.random() * 20);
            $scope.soCuoi = nn;


        }

    }



)