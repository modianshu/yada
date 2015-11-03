(function () {
    'use strict';
    angular.module('app.submissioncontent', [])
    .config
    (
        function ($stateProvider, $urlRouterProvider)
        {
            $stateProvider
            .state
            (
                'submissionContent',
                {
                    templateUrl: 'src/main/app/contentView/submissionContent.html',
                    controller: 'SubmissionContentController',
                    controllerAs: "vm"
                }
            )
        }
    );
})();