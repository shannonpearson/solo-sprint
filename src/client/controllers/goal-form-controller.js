import Goal from '../models/goal.js';

angular.module('GoalPosts.GoalForm.Controller', [])

// TODO: Define a controller that will allow the user to create a new Goal
	.controller('GoalFormCtrl', function($scope) {
		$scope.addGoal = Goal.addGoal(title, description, duedate, [thisuser]);

	})