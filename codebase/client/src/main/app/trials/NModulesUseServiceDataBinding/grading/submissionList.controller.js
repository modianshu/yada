(function () {
        'use strict';
        angular
            .module('app.grading')
            .controller('SubmissionListController', SubmissionListController);

        function SubmissionListController( SimpleYada,DatasharingService,$state, $stateParams) {
            var vm = this;
            SimpleYada.query().$promise
                .then
                (
                        function(res)
                        {
                            Logger.debug("query success...");
                            vm.list=res;
                            if (res.length>0)
                            {
                                Logger.debug("res is "+res);
                                DatasharingService.selectedContent=res[0].id;
                                Logger.debug(DatasharingService.selectedContent);
                            }
                        }
                )
                .catch(function(req){Logger.debug("query failed...")})
                .finally(function(){Logger.debug("query  finally")});//no need to pass id as the $resource template knows how to get the id.;


        }
    })();
