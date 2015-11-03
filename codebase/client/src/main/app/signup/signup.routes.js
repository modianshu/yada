(function () {
        'use strict';
        angular
            .module('app.signup')
            .config
        (
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                .state
                (
                    'signup',
                    {
                        url: '/signup',
                        templateUrl: 'src/main/app/signup/signup.html',
                        controller: 'SignupController',
                        controllerAs: "vm"
                    }
                )
            }
        );
    })();