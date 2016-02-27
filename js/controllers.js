var expenseManagerControllers = angular.module('expenseManagerControllers', []);

expenseManagerControllers.controller('ExpenseManagerCtrl', ['$scope', '$routeParams', '$http', '$location',
  function ($scope, $routeParams, $http, $location) {
    var getPeople = function (b, d) {
        var c = new XMLHttpRequest();
        c.onreadystatechange = function() {
            if (c.readyState === XMLHttpRequest.DONE && c.status === 200) {
                d(JSON.parse(c.responseText))
            }
        };
        c.open("GET", b, true);
        c.send()
    };
    var b = document.querySelector("#simple");
    getPeople("https://demo.vaadin.com/demo-data/1.0/people", function(c) {
      console.log(c.result);
    });
  }
]);
