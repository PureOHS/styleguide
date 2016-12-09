'use strict';

var app = angular.module('app', ['ngTouch', 'ui.grid']);

app.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.myData = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
];
}]);


$(document).ready(function () {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
});

	// $scope.gridOptions2 = {
  //       enableSorting: true,
  //       enableColumnMenus: false,
  //       enableGridMenu: true,
	// 	rowHeight: 34,
	// 	enableRowSelection: true,
	// 	enableRowHeaderSelection: false,
	// 	showSelectionCheckbox: false,
	// 	selectWithCheckboxOnly: false,
	// 	multiSelect: false,
  //       columnDefs: [
  //           {
  //               name: 'person', width: 150, displayName: 'Person', pinnedLeft: true,
	// 			cellTemplate: '<div class="ui-grid-cell-contents"><a href="theme-encounters.html">{{row.entity.person}}</a></div>'
  //           },
  //           {name: 'encounter', width: 180, displayName: 'Encounter',
  //               sort: { direction: uiGridConstants.DESC, priority: 1 }
  //           },
  //           {name: 'type', width: 140, displayName: 'Type'},
  //           {name: 'staff', width: 110, displayName: 'Staff'},
  //           {name: 'clinic', width: 140, displayName: 'Clinic'},
  //           {name: 'DOB', width: 120, displayName: 'DOB'},
  //           {name: 'empID', displayName: 'Emp ID'},
  //           {name: 'company', width: 140, displayName: 'Company'}
  //       ]
  //   };
  //
  //   $scope.gridOptions3 = {
  //       enableSorting: true,
  //       enableColumnMenus: false,
  //       enableGridMenu: true,
	// 	rowHeight: 34,
	// 	enableRowSelection: true,
	// 	enableRowHeaderSelection: false,
	// 	showSelectionCheckbox: false,
	// 	selectWithCheckboxOnly: false,
	// 	multiSelect: false,
  //       columnDefs: [
  //           {
  //               name: 'person', width: 150, displayName: 'Person', pinnedLeft: true,
	// 			cellTemplate: '<div class="ui-grid-cell-contents"><a href="theme-encounters.html">{{row.entity.person}}</a></div>'
  //           },
  //           {name: 'encounter', width: 180, displayName: 'Encounter',
  //               sort: { direction: uiGridConstants.DESC, priority: 1 }
  //           },
  //           {name: 'type', width: 140, displayName: 'Type'},
  //           {name: 'staff', width: 110, displayName: 'Staff'},
  //           {name: 'clinic', width: 140, displayName: 'Clinic'},
  //           {name: 'DOB', width: 120, displayName: 'DOB'},
  //           {name: 'empID', displayName: 'Emp ID'},
  //           {name: 'company', width: 140, displayName: 'Company'}
  //       ]
    // };
//
//     $http.get('json/people.json')
// 	.success(function (data) {
// 		$scope.gridOptions1.data = data;
// 		$('[ui-grid-menu-button]').detach().prependTo('#grid-menu-container');
// 		$('[ui-grid-menu-button] i').removeClass('ui-grid-icon-menu').addClass('fa fa-columns');
// 	});
//

 (document).ready(function () {
    ('#myModal').on('shown.bs.modal', function () {
      ('#myInput').focus()
    })
  })
//
// 	$http.get('json/encounters.json')
// 	.success(function (data) {
// 		$scope.gridOptions2.data = data;
// 	});
//
//     $http.get('json/encounters-event.json')
// 	.success(function (data) {
// 		$scope.gridOptions3.data = data;
// 	});
// }]);
