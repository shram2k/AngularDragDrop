
var mainCtrl = function($scope, $http, $filter,$timeout){
    $scope.Name="Ram Sharma";
};

mainCtrl.$inject = ['$scope', '$http', '$filter', '$timeout'];

angular.module('TalentFirstApp').controller('mainCtrl', mainCtrl);

