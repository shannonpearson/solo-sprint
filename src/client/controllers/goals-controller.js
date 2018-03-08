import Goal from '../models/goal.js';


angular.module('GoalPosts.Goals.Controller', ['$scope', function($scope) {

}])

// TODO: Define a controller that allows the user to view all goals.
.controller('GoalsCtrl', function($scope) {
	$scope.goals = [],
	$scope.handleCompleteGoal = function(id) {
		$scope.goals = Goal.findGoalByUserId([userid]);
	}
})
