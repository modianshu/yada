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
                                templateUrl: 'app/simpleyada/simpleyadaList.html',
                                controller: 'SimpleYadaListController',
                                controllerAs: "vm"
                            }
                        )
                        .state
                        (
                            'simpleYadaView',
                            {
                                url: '/simpleYadaView/:yadaId',
                                templateUrl: 'app/simpleyada/simpleyadaView.html',
                                controller:'SimpleYadaViewController',
                                controllerAs: "vm"
                            }
                        );
                     $urlRouterProvider.otherwise('/');
                 }
            );
    }
)();