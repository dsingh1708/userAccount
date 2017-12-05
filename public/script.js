var app = angular.module('myApp',['ngRoute']);

// app.controller('myCtrl', function($scope,$http) {

//     $scope.post = function() {
//         var payload = {
//           name:$scope.unameR,
//           email:$scope.emailR,
//           pwd:$scope.pwdR
//         };

// $http({
//   method: 'POST',
//  url: 'http://10.132.33.164:8086/Postbird',
//   // url: 'http://localhost:8086/Postbird',
//   data:payload,
//   headers:{'Content-Type': 'application/json'},
// }).then(function successCallback(response) {
//       console.log("Entered in successCallback ");
//       console.log(JSON.stringify(response.data));
//       console.log(response.status);
//       console.log(response.statusText);
//       console.log(response.statusText);
//       alert('Success');

//   }, function errorCallback(response) {
//       console.log("Entered in errorCallback ");
//       console.log(response.xhrStatus);
//       console.log(response.status);
//       console.log(response.statusText);
// });   
//       };

// });


// app.config('$routeProvider','$locationProvider',function ($routeProvider,$locationProvider) {
//     $locationProvider.hashPrefix('');
//     $routeProvider
//   .when("/Login", {
//             templateUrl: "loginsuccess.html",
//              controller: "myCtrl" 
//            })
// .otherwise({
//             redirectTo: '/Login'
//         });

app.controller('myCtrl',function($scope,$window){
      
          $scope.validate=function()
  { 
if(($scope.uname=="admin")&&($scope.pwd=="admin"))
    {
      $window.open("loginsuccess.html");
    }
    
    else
    {
      alert("Please enter valid Username and Password");
    }
  }
      
    });

// function login(){
//     if (document.getElementById("uname").value == "") {
//         alert("User name may not be blank");
//     } else if (document.getElementById("pwd").value == "") {
//         alert("Password may not be blank.");
//     }
//     if((document.getElementById("uname").value == "admin") && (document.getElementById("pwd").value == "admin")){
//         window.open("loginsucess.html");
//     }
//      if((document.getElementById("uname").value != "admin") && (document.getElementById("pwd").value != "admin")){
//         alert("Please enter correct Username and Password");
//     }

// }

// function register(){
//     if (document.getElementById("uname1").value == "") {
//         alert("User name may not be blank");
//     } else if (document.getElementById("pwd1").value == "") {
//         alert("Password may not be blank.");
//     }else if (document.getElementById("email1").value == "") {
//         alert("Email may not be blank.");
//     }
//     if((document.getElementById("uname1").value != "") && (document.getElementById("pwd1").value != "") && (document.getElementById("email1").value != "")){
//         alert("Registered Sucessfully");
//     }

// }

