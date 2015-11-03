(function () {
    'use strict';
    angular.module('app.grading', [])
        .service("DatasharingService",function(){
            var DatasharingService = this;
            DatasharingService.selectedContent="none";
        })
        .config
        (
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state
                (
                    'grading',
                    {
                        url: '/grading',
                        views: {
                            "": {templateUrl: "src/main/app/grading/gradingIndex.html"},
                        }
                    }
                )
                    .state(
                    "grading.submissionList",
                    {
                        url:"/submissionList",
                        templateUrl: "src/main/app/grading/submissionlist.html",
                        controller: "SubmissionListController",
                        controllerAs: "vm"
                    }

                )
                    .state(
                    "grading.submissionContent",
                    {
                        url:"/submissionContent",
                        templateUrl: "src/main/app/grading/submissionContent.html",
                        controller: "SubmissionContentController",
                        controllerAs: "vm"
                    }

                )

                    .state(
                    "grading.submissionComments",
                    {
                        url:"/submissionComments",
                        templateUrl: "src/main/app/grading/submissionComments.html",
                        controller: "SubmissionCommentsController",
                        controllerAs: "vm"
                    }

                )

                );
            }
        )

    })();
    /**
     * Grading app helps teachers in quickly getting a list of all the pending submissions and review them and
     * provide comment on them as well as grade them. Teachers/coachces will have an option to reject the submission and
     * send it back to the students.
     * /grading is the URL
     * this app will have multiple views active on the page.
     * unnamed root ui-view (i.e. index.html) will be targetted by the "" view name..which means target the unnamed ui-view
     * on the index.html page.
     * In addition to that I will have 3 or 4 other views and corresponding controllers in this state.
     *
     *
     */