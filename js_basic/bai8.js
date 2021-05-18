app.controller("myctrl8", function($scope) {
        var soNN = [];

        $scope.tinhtoan = function() {
            var soLonNhat = Math.max.apply(Math, soNN);
            var soBeNhat = Math.min.apply(Math, soNN);


            $scope.soLonNhat = soLonNhat;
            $scope.soBeNhat = soBeNhat;



        }
        $scope.choso = function() {

            var newNumber = [0];

            for (var i = 0; i < 15; i++) {
                newNumber = Math.round(Math.random() * 10000);
                soNN.push(newNumber);

            }
            $scope.so = soNN;


        }

    }



)