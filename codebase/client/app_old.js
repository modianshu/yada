(function() {
    'use strict';

    angular.module('app', [
        /*
         * Order is not important. Angular makes a
         * pass to register all of the modules listed
         * and then when app.dashboard tries to use app.data,
         * its components are available.
         */

        /*
         * Everybody has access to these.
         * We could place these under every feature area,
         * but this is easier to maintain.
         */
        'app.core',

        /*
         * Feature areas
         */
        'app.simpleyada',
        'app.signup',
        'app.grading'
    ]);
    //angular.module("app").config(['$resourceProvider', function($resourceProvider) {
    //    // Add an `update` method that leverages `PUT` to offer a true RESTful API
    //    $resourceProvider.defaults.actions.update = {method: 'PUT'}
    //}]);
    //
    //angular.module("app").run(function ($rootScope, $state, $stateParams) {
    //    $rootScope.$state = $state;
    //    $rootScope.$stateParams = $stateParams;
    //});

})();
