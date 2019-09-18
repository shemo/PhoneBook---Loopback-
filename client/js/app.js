var myApp = angular.module("phoneBook", ["lbServices"]);
myApp.controller("phoneBookController", function($scope, $http, Person) {
  $scope.people = Person.find();
  $scope.newPerson = "";
  $scope.pushPerson = function() {
    if ($scope.name != "" && $scope.phone != "") {
      Person.create({ name: $scope.name, phone: $scope.phone }).$promise.then(
        function(name, phone) {
          $scope.people.push({ name: $scope.name, phone: $scope.phone });
          $scope.name = "";
          $scope.phone = "";
        }
      );
    }
  };

  $scope.deletePerson = function(index) {
    Person.deleteById({ id: $scope.people[index].id }).$promise.then(
      function() {
        $scope.people.splice(index, 1);
      }
    );
  };

  $scope.findPerson = function(searchName) {
    Person.find({ where: { name: $scope.searchName } }, function(err, people) {
      $scope.people = people;
      console.log(people);
    });
  };

  // $scope.editPerson = function(index) {
  //   Person.updateAll({id : $scope.people[index].id}, {name :$scope.name} , {phone :$scope.phone}, function(err, count) {
  //     if (err) {
  //       console.error(err);
  //     }
  //     console.log(count); // number of data updated
  //   })
  // }
});
