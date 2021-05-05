app.controller("myctrl6", function($scope) {

        $scope.tinhtoan = function() {

            kq = true;
            var a = parseInt($scope.soCuoi);

            if (a < 2) {
                kq = false;
            } else if (a == 2) {
                kq = true;
            } else if (a % 2 == 0) {
                kq = false;
            } else {
                for (var i = 3; i < Math.sqrt(a); i += 2) {
                    if (a % i == 0) {
                        kq = false;
                        break;
                    }
                }
            }
            if (kq == true) {
                $scope.Tong = a + " là số nguyên tố";
            } else {
                $scope.Tong = a + " không là số nguyên tố ";
            }



        }
        $scope.choso = function() {
            var nn = Math.round(Math.random() * 100);
            $scope.soCuoi = nn;


        }

    }



)