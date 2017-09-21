var app = angular.module('personalApp', []);

app.controller('myCtrl', function($scope, $http) {
       
});

// Load div with background of random Unsplash image
app.directive('randomBackgroundImage', function ($http) {
    return function (scope, element) {
    
    	scope.unsplashApiKey = '78a02e46cc2a6c66a7e66bc6b3c16117a024a68aa956e01381be9342d6d17baf';
    
    	$http.get("https://api.unsplash.com/photos/random?client_id="+scope.unsplashApiKey)
    	.then(function(response) {
    	    scope.imgurl = response.data.urls.full;
    	    scope.imgcredit = response.data.user.username;
    		scope.setImg();
 	       
    	}, function(){
			scope.imgurl = '/images/osman-rana-343255.jpg';
			scope.imgcredit = 'osmanrana';
			scope.setImg();
	   }); 
	   
	   scope.setImg = function(){
	   		element.css({
 	           'background-image': 'url(' + scope.imgurl + ')',
 	           'background-repeat': 'no-repeat',
		       'background-position': 'center center',
       			'-webkit-background-size': 'cover',
       			'background-size': 'cover'
 	       })
 	       
 	        var pcred = angular.element("<div class='photocredit'>Photo by <a href='https://www.unsplash.com/@"+scope.imgcredit+"'>"+scope.imgcredit+"</a> via <a href='https://www.unsplash.com'>Unsplash</a></div>");
			element.append(pcred);
		}
        
    };
});