var expenseManagerServices = angular.module('expenseManagerServices', ['ngResource']);

expenseManagerServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }
]);
