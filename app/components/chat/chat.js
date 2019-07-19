app.controller('contact', function($dcope,$http)
{
  $scope.select=null;
  $http.get('/')
  .then(function(response)
  {
    $scope.contacts=response.data;

  })

})