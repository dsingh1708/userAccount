// var app = angular.module("myApp",[])

// app.controller('regCtrl', function($scope,$http){

// $scope.login = function()
// {
//    var body = {
        
//             firstname: $scope.firstname,
//             lastname : $scope.lastname,
//             pwd : $scope.pwd,
//             confirmpwd : $scope.confirmpwd,
//             email:$scope.email,
//             phone:$scope.phone
        

// 	};
//    // var book = JSON.stringify(data);
//    // $http.post("/Postbird", data).success(function(data, status) {
//    //      console.log('Data posted successfully');
//    //    })

//    $http({
//     method: 'POST',
//     url: 'http://localhost:3000/Post',
//     data:body,
//     headers:{'Content-Type': 'application/json'},
//   }).then(function successCallback(response) {
//         console.log("Entered in successCallback ");
//         console.log(JSON.stringify(response.data));
//         console.log(response.status);
//         console.log(response.statusText);
//         console.log(response.statusText);
//         alert('Success');
//         }, function errorCallback(response) {
//         console.log("Entered in errorCallback ");
//         console.log(response.xhrStatus);
//         console.log(response.status);
//         console.log(response.statusText);
// }); 
//    }
// });