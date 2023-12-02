let app = angular.module("momentsApp", ['ngMaterial', 'ngMessages']);

app.controller("momentsController", function($scope) {

    // NOTE: everything that's used in Angular expressions needs
    // to be defined as a variable/function in $scope.

    // Object for user info (which the {{}} expressions use as {{user.name}} etc)
    $scope.test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    $scope.getLoginPage = () => { 
        alert("TODO: implement login page");
        // window.location = "login.html";
    }
    $scope.getManageUserPage = () => {
        alert("TODO: implement manage user page");
    }


    $scope.user = {
	name: "",
	email: ""
    };

    // Dates
    $scope.departureDate = new Date ();
    $scope.returnDate = new Date ();

    // Switches
    $scope.pickup = false;
    $scope.dropoff = false;

    // Radio buttons
    $scope.vacationTypeData = [
	{ label: 'Beach', value: 1},
	{ label: 'Adventure', value: 2},
	{ label: 'Historical', value: 3},
	{ label: 'Foodie', value: 4}
    ];
    $scope.vacationType = 1;

    // Checkboxes
    $scope.checklistItems = ["flight","hotel","meals","local tours"];
    $scope.selectedItems = [];
    $scope.isChecked = function (item) {
	    return $scope.selectedItems.indexOf(item) > -1;
    };
    $scope.toggle = function (item) {
        var index = $scope.selectedItems.indexOf(item);
        if (index > -1) {
            $scope.selectedItems.splice(index, 1);   // Remove element at index, howmany=1
        }
        else {
            $scope.selectedItems.push(item);
        }
    };
    $scope.checklist = function() {
        let listStr = "";
            for (let i=0; i<$scope.selectedItems.length; i++) {
                listStr += " " + $scope.selectedItems[i];
            }
        return listStr;
    };

    // Finally, the submit button.
    $scope.submit = function($scope) {
	sendDataToServer ($scope);
    };
});

app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
	.primaryPalette('blue', {
	    'default': '600', 
	    'hue-1': '800', 
	    'hue-2': '700', 
	    'hue-3': 'A100' 
	})
	.accentPalette('cyan', {
	    'default': '900', 
	    'hue-1': '800', 
	    'hue-2': '600', 
	    'hue-3': 'A100' 
	})
        .warnPalette('red');
});

function sendDataToServer($scope) {
    // Put everything into a JSON string and send to the server.
}

