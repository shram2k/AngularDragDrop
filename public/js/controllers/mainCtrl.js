
angular.module('TalentApp').requires = ['ui.sortable'];

var mainCtrl = function($scope, $http, $filter,$timeout){
     $scope.TeamMembers = [];
     $scope.TeamMembers2 = [];
    $scope.sortableOptions = {
        placeholder: "app",
        connectWith: ".apps-container"
    };

    $scope.sortableOptionsBoxes = {
        placeholder: "app",
        connectWith: ".apps-container",
        update: function (e, ui) {
            //setTimeout(function () {

            //    $(ui.item).setSlimScrollBar();
            //}, 500);
            //if (ui.item.scope().item == "can't be moved") {
            //    ui.item.sortable.cancel();
            //}
        }
    };
$scope.init = function () {
    $scope.TeamMembers = [];
    $http.get('/api/members').then(function(response)
{
   
    $scope.TeamMembers = response.data.TeamMembers;
    
}, function(err){
    console.log(err.data);

});
}

};

mainCtrl.$inject = ['$scope', '$http', '$filter', '$timeout'];

angular.module('TalentApp').controller('mainCtrl', mainCtrl);

