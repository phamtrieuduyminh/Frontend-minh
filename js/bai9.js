app.controller("myctrl9", function($scope) {
        var soNN = [];

        $scope.tinhtoan = function() {




        }
        $scope.choso = function() {

            var newNumber = [];

            for (var i = 0; i < 15; i++) {
                newNumber = Math.floor(Math.random() * (200 - (-200))) + -200;
                soNN.push(newNumber);
            }


            $scope.so = soNN;
        }

    }



)