app.controller("myctrl7", function($scope) {

        $scope.tinhtoan = function() {
            var soLonNhat = $scope.soA;


            if (soLonNhat < $scope.soB) {
                soLonNhat = $scope.soB;


            }
            if (soLonNhat < $scope.soC) {
                soLonNhat = $scope.soC;

            }

            $scope.ketQua = soLonNhat + "   là số lớn nhất";





        }
        $scope.choso = function() {
            $scope.soA = Math.round(Math.random() * 100);
            $scope.soB = Math.round(Math.random() * 100);
            $scope.soC = Math.round(Math.random() * 100);

        }

    }



)