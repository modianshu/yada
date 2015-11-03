(function () {
        'use strict';
        angular
            .module('app.submissioncontent')
            .controller('SubmissionContentController', SubmissionContentController);

        function SubmissionContentController($state, $stateParams,DatasharingService) {
            var vm = this;
            Logger.debug("***"+DatasharingService.data.selectedContent);
            vm.data = DatasharingService.data;
        }
    })();
