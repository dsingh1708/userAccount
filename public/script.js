var app = angular.module('userApp',['ngRoute']);

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



app.config(function($routeProvider) {
      $routeProvider
 
          // route for the home page
          .when('/', {
             templateUrl : 'index.html'
             
         }) 
         // route for the about page
         .when('/login', {
             templateUrl : 'login.html'
             // controller  : 'userCtrl',
            
         });
     // set our app up to have pretty URLS
     //$locationProvider.html5Mode(true);
 });

app.controller('userCtrl',function($scope,$location){
      
          $scope.login=function()
  { 
if($scope.user.UserName=="admin" && $scope.user.password=="admin" )
    {
      $location.path("/login");
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

