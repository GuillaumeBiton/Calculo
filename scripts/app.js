'use strict'

var app = angular.module('Calculo', []);

app.controller('appCtrl', function($scope) {
	$scope.pad = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', 'clear', '+'];
	$scope.formula = ['0'];

	$scope.add = function(item) {
        if (item == 'clear') { 
            $scope.remove();
        } else {
            (! /[0-9]/.test(item) && ! /[0-9]/.test($scope.formula.slice(-1)[0])) ? $scope.remove() : null;
            ($scope.formula == '0' && /[0-9]/.test(item)) ? $scope.formula = [item] : $scope.formula.push(item);
        }
	};

	$scope.solve = function() {
        console.log($scope.formula);
		if(! /[0-9]/.test($scope.formula.slice(-1)[0])) return eval($scope.formula.slice(0, $scope.formula.length - 1).join(''));
        else return eval($scope.formula.join(''));
	};

	$scope.clear = function() {
		$scope.formula = ['0'];
	};

    $scope.remove = function() {
        $scope.formula.pop();
        ($scope.formula.length == 0) ? $scope.clear() : null;
    }
});

app.directive('onTouch', [ '$parse', function($parse) {
  return {
        restrict: 'A',
        link: function(scope, elm, attrs) {
            var ontouchFn = $parse(attrs.onTouch);
            var params = Array.prototype.slice.call(arguments);
            params = params.splice(1);
            ( 'ontouchstart' in window ) ? 
            elm.bind('touchstart', function(evt) {
                scope.$apply(function() {
                    ontouchFn(scope, { $event: evt, $params: params });
                });
            }) :
            elm.bind('click', function(evt){
                    scope.$apply(function() {
                        ontouchFn(scope, { $event: evt, $params: params });
                    });
            });
        }
    };
}]);