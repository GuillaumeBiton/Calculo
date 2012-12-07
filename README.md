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

Github commit :