app.controller('friend-list',function($scope, $http)
{
	$http.get('/handlers/Listmsg').then(function(response)
	{
		$scope.user=response.data;
	})
	$http.get('/handlers/chat').then(function(response)
	{
   		 $scope.row = response.data; 
    })
	$scope.selected=null;
	$scope.friend=function(f)
	{
		$scope.selected=f;
	};
});