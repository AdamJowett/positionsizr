var SizrApp = angular.module('sizrApp', ['ui.router']);

SizrApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	'use strict';

	var home = { name: 'home', url: "/home", templateUrl: "views/home.tpl.html"	},
		welcome = { name: 'home.welcome', url: "/welcome", templateUrl: "views/home.welcome.tpl.html" };

	$stateProvider.state(home);
	$stateProvider.state(welcome);

	// Catch any invalid url's and redirect them
	$urlRouterProvider.otherwise("/home");

}]);

/**
 * Called when the app is instantiated, used to reference the scope of the current page and navigate the app to the default page
*/
SizrApp.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
	'use strict';

	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;
	$state.go('home');
}]);
