app.controller('friend-list',function($scope, $http)
{
	$http.get('/handlers/list').then(function(response)
	{
		$scope.list=response.query;
	})
	// $http.get('/handlers/chat').then(function(response)
	// {
 //   		 $scope.row = response.data; 
 //    })
	$scope.selected=null;
	$scope.friend=function(x)
	{
		$scope.selected=x;
	};
});