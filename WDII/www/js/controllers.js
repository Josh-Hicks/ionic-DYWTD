angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    $scope.dogs = [
        {
          name: 'Lexi',
          image: "http://t3.gstatic.com/images?q=tbn:ANd9GcRtmoEn9XwUcxUhBEvzQXhKDylgFsWbJuN5mBSV2jbpig7eTLOA",
          walks: 0,
          feedings: 0
        },
          {
          name: 'Oswald',
          image: "http://www.petmd.com/sites/default/files/breedopedia/toy%20poodle%20adonis_0.jpg",
          walks: 0,
          feedings: 0
        }
      ];

      $scope.walk = function(dog) {
        dog.walks += 1;
      }

      $scope.feed = function(dog) {
        dog.feedings += 1;
      }
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
