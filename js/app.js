(function (window) {
	angular.module('mymodule', [])
		   .controller('mycontroller', ['$scope', function($scope){
		   		$scope.items = ["吃饭","上班","睡觉"]
		   }])

})(window);
