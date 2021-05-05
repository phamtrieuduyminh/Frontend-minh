app.controller("myctrl5", function($scope) {

        $scope.tinhtoan = function() {
            var Tong = 1;

            var a = parseInt($scope.soCuoi);
            for (var i = 1; i <= a; i++) {
                Tong = Tong * i;
            }
            $scope.Tong = Tong;
        }

        $scope.choso = function() {
            var nn = Math.round(Math.random() * 100);
            $scope.soCuoi = nn;


        }

    }



)