import Goal from '../models/goal.js';

angular.module('GoalPosts.Auth.Controller', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.login = function () {
    Auth.login($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.gp', token);
        $location.path('/goals');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.gp', token);
        $location.path('/goals');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
