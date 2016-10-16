(function(){
  'use strict';

  angular.module("LunchCheckApp", [])
    .controller("LunchCheckController", lunchChecker);

  lunchChecker.$inject = ['$scope'];
  function lunchChecker($scope) {
    $scope.lunchString = "";
    $scope.lunch = [];
    $scope.msg = "";
    $scope.description = "";
    $scope.msgColor = "";

    $scope.check = function(){
      if($scope.lunchString == ""){
        $scope.msg = "Please enter data first";
        $scope.msgColor = "red";
      }else {
        $scope.msgColor = "green";
        $scope.lunch = $scope.lunchString.split(',');
        var lunch = [];
        for(var i = 0; i < $scope.lunch.length; ++i) {
          if($scope.lunch[i].replace(/^\s+|\s+$/g,"") != ""){
            lunch.push($scope.lunch[i]);
          }
        }
        if(lunch.length < 4){
          $scope.msg = "Enjoy!";
        }else{
          $scope.msg = "Too much";
        }
        $scope.description = "You have " + lunch.length + (lunch.length==1?" dish":" dishes") +" for lunch: ";
        for(var i = 0; i < lunch.length-1; ++i) {
          $scope.description += lunch[i] + ', ';
        }
        $scope.description += lunch[lunch.length-1];
      }
    };
  }
})()
