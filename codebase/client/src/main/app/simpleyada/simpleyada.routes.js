(
    function()
    {
        'use strict';
        angular
            .module('app.simpleyada')
            .config
            (
                function($stateProvider, $urlRouterProvider)
                {
                    $stateProvider
                        .state
                        (
                            'simpleYadaList',
                            {
                                url: '/',
                                templateUrl: 'src/main/app/simpleyada/simpleyadaList.html',
                                controller: 'SimpleYadaListController',
                                controllerAs: "vm"
                            }
                        )
                        .state
                        (
                            'simpleYadaEdit',
                            {
                                url: '/simpleYadaEdit/:id',
                                templateUrl: 'src/main/app/simpleyada/simpleyadaEdit.html',
                                controller:'SimpleYadaEditController',
                                controllerAs: "vm"
                            }
                        );
                     $urlRouterProvider.otherwise('/');
                 }
            );
    }
)();