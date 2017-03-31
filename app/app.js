/**
 * Created by Kasun Edward on 3/31/2017.
 */
angular.module('myApp',[])
    .controller('smsController',function($scope,$http){
        $scope.doClick=function(){
            console.log("aaaaaa");
            var request = $http({
                method: "post",
                url: "ex.php",
                // data: {
                //     email: $scope.email,
                //     pass: $scope.password
                // },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            /* Check whether the HTTP Request is successful or not. */
            request.success(function (data) {
                console.log("success");
            });
        }
    })
