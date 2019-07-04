var aa = angular.module('a', ['ngMaterial'])

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// Dropdown end

// contact list js
app.controller('contact-list',function($scope,$http){
  $scope.selected = null;
  $http.get('/handlers/current_user')
  .then(function(response){
    $scope.user = response.data; 
    console.log($scope.user)
    return $http.get('/handlers/msg')
    })
  .then(function(response){
    $scope.contacts = response.data; 
    console.log( $scope.contacts)
    })

    $scope.user2 = function(data) {
      $scope.selected = data;
      var contact_chat = {
        user2_key : data.key
      };
  var jstring = JSON.stringify(contact_chat);
  $http.post('/handlers/', jstring).then(
    function(response)
    {$scope.oldChat =  JSON.parse(response.data.data)
    console.log($scope.oldChat)
    // $scope.cursor = response.data._cursor
    }
  )
    }
});

app.controller('index-controller',function(){
  window.location.assign("/chat#!/chat")
})
// contact list end
// message send controller
app.controller('sendtext',function($scope,$http){
  $scope.send = function(text) {   
    var text_data = {
        content: text,
        user2_key:$scope.selected.key
    };
  var jstring = JSON.stringify(text_data);
  $http.post('/handlers/msgsent', jstring)}


});
