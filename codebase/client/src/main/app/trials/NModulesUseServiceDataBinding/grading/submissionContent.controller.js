(function () {
        'use strict';
        angular
            .module('app.grading')
            .controller('SubmissionContentController', SubmissionContentController);

        function SubmissionContentController($state, $stateParams,DatasharingService) {
            var vm = this;
            vm.selectedContent = DatasharingService.selectedContent;
        }
    })();
