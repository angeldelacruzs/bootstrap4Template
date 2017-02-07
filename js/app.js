var app = angular.module('myApp', []);
app.controller('myCtrl',  function ($scope) {
		

	
});

app.directive("homeTemplate", function() {
    return {
        template : "I was made in a directive constructor!"
    };
});