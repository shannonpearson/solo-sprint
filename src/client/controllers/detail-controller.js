import Goal from '../models/goal.js';

angular.module('GoalPosts.Detail.Controller', ['$scope', function($scope) {

}])

// TODO: Define a controller that will display a single Goal's detailed notes
	.controller('GoalDetailsCtrl', function($scope) {
		$scope.goal = null,
		$scope.displayGoalDetails = function(id) {
			$scope.goal = findById(id);
		}
	})