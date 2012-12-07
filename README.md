Calculo
=======

AngularJS simple calculator tutorial application

- - - 
 
## Overview

this article covers the steps of building a simple calculator web-application powered by Angular
JS.

I will try to do it the best I can. It's an effort to share and an effort to learn.

After all, this tutorial could be divided into parts as the web-application will involve with new idea.

- - -

## Basic Idea

The first thing is to get something to do. Quite trivial but not so simple when you don't want to create another todos' example.

So we are ready to build a simple calculator. For the first release, I want this application able to do :

- basic operation (+, -, *, /)
- display expression and partial result
- fit well with any devices

Every things are simple here except the responsiveness wanted.

The project is named Calculo which is the latin verb for calculate.

- - -

## Project Layout

I will not start with [angular-seed](https://github.com/angular/angular-seed) which is a very good starting point. But I want to start from scratch.

This project will be host on [github](http://www.github.com). So we will use git and learn some features.

This application doesn't need special http server so I plan to use github gh-pages to provide access to the web app.

- - -

## Step by Step

### Step 1 - Initiate project

I create a github repository named "Calculo". Then I clone the repository on my local machine.
	git clone http://github.com/GuillaumeBiton/Calculo.git

I organize my project files and folders like this:
- css/ (folder for style)
- scripts/ (folder for javascripts)
- index.html (root)

I use CDN for angularjs' library.
So I create the index.html file with the usual tag to start.

### Step 2 - Design

I would like something which could manage easily like an array of value. I like the simple layout proposed by [currency.io](https://github.com/benschwarz/currency.io). I am not a designer so I will get some CSS from this project.

For now, I need :
- an "output" for the result and the expression
- an "input" for the user interaction

The idea in currency.io is to manage the calculator input as a list of items.

Credits for the style go to the authors of [currency.io](https://github.com/benschwarz/currency.io).

### Step 3 - first commit to github

So I commit the first changes as step-2 to github. so :
	git add .
	git commit -m 'step2, early design'
	git push origin master

Now my files are updated on the remote repository. I also want to make an early test of my app. Github allows us to serve HTML pages using a "gh-pages" branch in the projet. Git is very useful here. I only have to create a branch at this point and my app will be available :
	git branch gh-pages
	git push origin gh-pages

Now I can see [my demo app](http://GuillaumeBiton.github.com/Calculo) running.

### Step 4 - powering with AngularJS

[AngularJS](http://www.angularjs.org) is a very powerful javascript framework. My choice for AngularJS is that it allows you to extend HTML syntax so you can easily understand the relation between the user interface and functionalities.

First, AngularJS need a directive that explains it's an angular application. I place it on the body element:
	...
	<body ng-app="Calculo">

And I define a module to start the AngularJS app. So let's define it. I create into scripts directory a file named app.js with this simple code in it :
	'use strict'
	var app = angular.module('Calculo', []);

So now are web application is powered by AngularJS and a first scope named $rootscope is accessible.

But I want a controller for the calcultor functions so I place the directive on my calculator wrapper:
	<div ng-controller="appCtrl">
	...

Now everything inside is associated to my "appCtrl". 
	app.controller('appCtrl', function($scope) {});

And I add this script to my app into index.html.

I manage my input-pad as a list associated to the ng-repeat directive. So I create an array in my controller scope named "pad" with my inputs inside.
	$scope.pad = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '', '+'];

And I add the directive to generate my pad into index.html :
	<li ng-repeat="input in pad">{{input}}</li>

I need also a variable for the formula. so I can define an array of string to get the expression to solve.
	$scope.formula = ['0'];

I want to display my formula on screen. With angularJS, I am able to define javascript into the html binding so :
	...
	<h2>{{formula.join('')}}</h2>

No I need to power my application with a function that adds user input into the formula :
	$scope.add = function(item) {
		($scope.formula == '0') ? $scope.formula = [item] : $scope.formula.push(item);
	}

I want this function to be call on click on a input in the pad, so I add it to list repeater :
	<li ng-repeat='input in pad' ng-click='add(input)'>{{input}}</li>

Now I create a solve function and I bind it to the ui :
	$scope.solve = function() {
		if(typeof eval($scope.formula.slice(-1)[0]) != "number") return eval($scope.formula.slice(0, $scope.formula.length - 1).join(''));
        else return eval($scope.formula.join(''));
	}

	...
	<h1>{{solve()}}</h1>
	...

I also want to clear and I bind with a click on the result :
	$scope.clear = function() {
		$scope.formula = ['0'];
	}

	...
	<h1 ng-click='clear()'>{{solve()}}</h1>
	...

So my calculator is quite functionnal so I can push to github.