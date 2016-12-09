'use strict';

var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.moveColumns', 'ui.grid.pinning', 'ui.grid.selection']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.gridOptions1 = {
        enableSorting: true,
        enableColumnMenus: false,
        enableGridMenu: true,
		rowHeight: 34,
		enableRowSelection: true,
		enableRowHeaderSelection: false,
		showSelectionCheckbox: false,
		selectWithCheckboxOnly: false,
		multiSelect: false,
        columnDefs: [
            {name: 'pt', cellTemplate: 'pt-banner.html', width: 36, displayName: '', enableSorting: false, pinnedLeft: true},
            {
                name: 'lastName', width: 120, displayName: 'Last Name', pinnedLeft: true,
//                cellTemplate: '<div class="ui-grid-cell-contents"><a data-toggle="modal" data-target="#myModal" ng-href="person/{{row.entity.empID}}">{{row.entity.lastName}}</a></div>'
				cellTemplate: '<div class="ui-grid-cell-contents"><a href="/theme-person.html">{{row.entity.lastName}}</a></div>'
            },
            {name: 'firstName', width: 110, displayName: 'First Name'},
            {name: 'govID', width: 120, displayName: 'Gov ID'},
            {name: 'DOB', width: 110, displayName: 'DOB'},
            {name: 'address', width: 200, displayName: 'Address'},
            {name: 'state', width: 110, displayName: 'State'},
            {name: 'city', width: 120, displayName: 'City'},
            {name: 'zip', width: 75, displayName: 'Zip'},
            {name: 'empID', width: 90, displayName: 'Emp ID'},
            {name: 'company', width: 100, displayName: 'Company'},
            {name: 'status', width: 100, displayName: 'Status'},
            {name: 'active', width: 100, displayName: 'Active', pinnedRight: true}
        ]
    };
	
	$scope.gridOptions2 = {
        enableSorting: true,
        enableColumnMenus: false,
        enableGridMenu: false,
        columnDefs: [
            {name: 'file', displayName: 'File ID'},
            {name: 'date', displayName: 'Date Added'},
            {name: 'type', displayName: 'Type'}
        ]
    };

    $http.get('./json/people.json')
	.success(function (data) {
		$scope.gridOptions1.data = data;
		$('[ui-grid-menu-button]').detach().prependTo('#grid-menu-container');
		$('[ui-grid-menu-button] i').removeClass('ui-grid-icon-menu').addClass('fa fa-columns');
	});
	
	$http.get('./json/resources.json')
	.success(function (data) {
		$scope.gridOptions2.data = data;
	});
}]);







//app.directive('ulPopover', [
//    function () {
//        return {
//            link: function (scope, element) {
//                $(element).popover({
//                    container: 'body',
//                    placement: 'bottom'
//                });
//            }
//        };
//    }
//]);
