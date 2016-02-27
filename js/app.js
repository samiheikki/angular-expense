var expenseManagerApp = angular.module('expenseManagerApp', [
    'ngRoute',
    'expenseManagerAnimations',
    'expenseManagerControllers'
]);

expenseManagerApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/app', {
                templateUrl: 'app/expense-manager.html',
                controller: 'ExpenseManagerCtrl'
            }).
            when('/login', {
                templateUrl: 'app/partials/vaadin.html',
                controller: 'LoginCtrl'
            }).
            otherwise({
                redirectTo: '/app'
            });
    }
]);
