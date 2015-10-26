'use strict';

/**
 * @ngdoc function
 * @name angularTodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTodoApp
 */
angular.module('angularTodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3','Item 4'];
    $scope.addTodo = function () {
      try {
        $scope.todos.push($scope.todo);
        $scope.todo = '';
        }
      catch(err) {
            alert(err.message);
        }
    };

    $scope.removeTodo = function (index) {
      $scope.todor.splice(index, 1);
    };
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

