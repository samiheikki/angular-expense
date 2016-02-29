var expenseManagerControllers = angular.module('expenseManagerControllers', []);

expenseManagerControllers.controller('ExpenseManagerCtrl', ['$scope', '$routeParams', '$http', '$location',
  function($scope, $routeParams, $http, $location) {

    //Properties
    $scope.service = {};
    $scope.loggedIn = true; //TODO refactor
    $scope.online = true; //TODO refactor
    $scope.animationConfig = { //TODO refactor
      value: function() {
        return {
          'entry': [{
            name: 'fade-in-animation',
            node: this
          }, {
            name: 'hero-animation',
            id: 'hero',
            toPage: this
          }],
          'exit': {
            name: 'fade-out-animation',
            node: this
          }
        };
      }
    };
    $scope.sharedElements = { //TODO refactor
      value: function() {
        return {
          'hero': this.$.logo
        };
      }
    };

    window.addEventListener('WebComponentsReady', function(e) {
      $scope.service = document.querySelector('expense-service').service;
      document.querySelector('expenses-list').update();
    });


    $scope.update = function() { //TODO
      this.$$('#list').update();
      this.$$('#overviewPanel').update();
    };
    $scope._editExpense = function() { //TODO
      var editor = this.$.expenseEditor;
      editor.expense = evt.detail.expense || {};
      editor.open();
    };
    $scope._updateExpenses = function() { //TODO
      this.$.expenseEditor.close();
      this.update();
      if (evt.detail.reason === 'deleted') {
        this.$.saveNotification.text = 'Expense was deleted';
      } else {
        this.$.saveNotification.text = 'Expense was saved';
      }
      this.$.saveNotification.show();
    };
    $scope._loggedIn = function() { //TODO
      this.$$('#list').update();
      this.$$('#overviewPanel').update();
    };
    $scope._logout = function() { //TODO
      this.$$('#list').update();
      this.$$('#overviewPanel').update();
    };
    $scope._showAbout = function() { //TODO
      this.$$('#list').update();
      this.$$('#overviewPanel').update();
    };
    $scope._connectionStatusChanged = function() { //TODO
      if (this.loggedIn && this.service) {
        this.update();
      }
    };
    /*var getPeople = function (b, d) {
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
      //console.log(c.result);
    });*/
  }
]);
