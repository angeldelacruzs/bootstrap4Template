var app = angular.module("myApp", ["ngRoute","angular-loading-bar"]);
  app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
        
       }]);
    app.controller('hometCtrl',  function ($scope, $http) {

  



            $scope.aqui = "Portal Newspaper daily.";

            $http.get('https://jsonplaceholder.typicode.com/posts')

            .then(function(response){

                $scope.post = response.data;
                console.log($scope.post);

            });




    });

    app.controller('ContactCtrl',  function ($scope) {
            $scope.aqui = "Contact";
    });

    app.controller('feedsCtrl',  function ($scope) {
        $scope.aqui = "Feeds";
    });


    app.controller('ViewInfoCtrl', function($scope,  $routeParams, $http){

        $scope.param = $routeParams.params;

        $http.get('https://jsonplaceholder.typicode.com/posts/'+$scope.param)
        .then(function(response){

            $scope.result = response.data;
             $scope.aqui = $scope.result.title;
             $scope.body =  $scope.result.body
            

        });

    });

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "template/home.html",
        controller: "hometCtrl"


    })
    .when("/contact", {
        templateUrl : "template/contact.html",
        controller: "ContactCtrl"
    })
    .when("/feeds", {
        templateUrl : "template/feeds.html",
        controller: "feedsCtrl"
    })
    .when('/view/:params', {
        templateUrl: 'template/view.html',
        controller: 'ViewInfoCtrl'
    })
    .otherwise({
        templateUrl : "template/home.html"
    })
     
});