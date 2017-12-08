var app = angular.module('userApp',['ngRoute']);





app.config(function($routeProvider) {
      $routeProvider
 
          .when('/', {
             templateUrl : 'pages/login/signin.html'
             
         }) 
         
         .when('/login', {
             templateUrl : 'pages/login/login.html'
             // controller  : 'userCtrl'
              }) 
        
          .when('/signup', {
             templateUrl : 'pages/register/signup.html'
             // controller  : 'userCtrl'
              }) 

         .when('/register', {
             templateUrl : 'pages/reg.html'
             // controller  : 'userCtrl'
            
         })
         .otherwise({
        redirectTo: '/'
    });
 });


// <!-- hardcoding to check with routing -->

app.controller('userCtrl',function($scope,$window){
      
          $scope.login=function()
  { 
if($scope.UserName=="admin" && $scope.password=="admin" )
    {
      $window.open("/login");
    }
    
    else
    {
      alert("Please enter valid Username and Password");
    }
  }


$scope.register = function()
{
   var body = {
            UserName: $scope.UserName,
            firstname: $scope.firstname,
            lastname : $scope.lastname,
            email:$scope.email,
            phone:$scope.phone,
            pwd : $scope.pwd,
            confirmpwd : $scope.confirmpwd
            
        

  };
   // var book = JSON.stringify(data);
   // $http.post("/Postbird", data).success(function(data, status) {
   //      console.log('Data posted successfully');
   //    })

   $http({
    method: 'POST',
    url: 'http://localhost:3000/Post',
    data:body,
    headers:{'Content-Type': 'application/json'},
  }).then(function successCallback(response) {
        console.log("Entered in successCallback ");
        console.log(JSON.stringify(response.data));
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.statusText);
        alert('Success');
        }, function errorCallback(response) {
        console.log("Entered in errorCallback ");
        console.log(response.xhrStatus);
        console.log(response.status);
        console.log(response.statusText);
}); 
   }

});

 

