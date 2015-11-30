'use strict';

/**
 * @ngdoc function
 * @name angularJsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsApp
 */
angular.module('angularJsApp')
  .controller('MainCtrl', function ($scope) {
    //Vars
    $scope.contacts = [
      {
        id: 1,
        firstName: 'Swek',
        surname: 'Swekker',
        email: 'swek@swekker.swek',
        editMode: false
      },
      {
        id: 2,
        firstName: 'Swag',
        surname: 'Swagger',
        email: 'swag@swagger.swag',
        editMode: false
      }
    ];

    $scope.newContact = {};
    $scope.addingNew = false;

    //Methods
    $scope.saveContact = function() {
      $scope.newContact.id = $scope.findNextId();
      $scope.contacts.push($scope.newContact);
      $scope.newContact = {};
      $scope.addingNew = false;
    };

    $scope.delete = function(contact) {
      var index = $scope.contacts.indexOf(contact);
      $scope.contacts.splice(index, 1);
    };

    $scope.edit = function(contact) {
      $scope.contacts.forEach(function(contact) {
        contact.editMode = false;
      });
      contact.editMode = true;
    };

    $scope.findNextId = function() {
      var foundIds = [];
      $scope.contacts.forEach(function(contact){
        foundIds.push(contact.id);
      });
      foundIds = foundIds.sort();

      console.log(foundIds);

      var selectId = -1;
      var i = 1;
      while(selectId == -1) {
        if (foundIds[i - 1] != i) {
          selectId = i;
          console.log("Selected ID: " + selectId);
        } else {
          i++;
        }
      }

      return selectId;
    }

  });
