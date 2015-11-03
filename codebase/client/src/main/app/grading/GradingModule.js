(function () {
    'use strict';
    angular.module('app.grading', [])
        .service("DatasharingService",function(){
            var data ={ lastUpdated: new Date(), selectedContent: "none" };
            return {data:data};
            }
        )

        .controller('GradingController',GradingController)
        .controller('ContentListController',ContentListController)
        .controller("BookReportController",BookReportController)
        .controller("SimpleCommentsController",SimpleCommentsController)


        .config
        (
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                .state
                (
                    'grading',
                    {
                        url: '/grading',
                        views:
                        {
                            "":
                            {
                                templateUrl: 'src/main/app/grading/Grading.html',
                                controller: 'GradingController',
                                controllerAs: "vm"
                            },
                            "submissionList@grading":
                            {
                                templateUrl: "src/main/app/contentlist/ContentList.html",
                                controller: "ContentListController",
                                controllerAs: "vm"
                            },
                            "submissionContent@grading":
                            {
                                templateUrl:"src/main/app/content/BookReport.html",
                                controller:"BookReportController",
                                controllerAs:"vm"
                            },
                            "submissionComments@grading": {
                                templateUrl: "src/main/app/comments/SimpleComments.html",
                                controller: "SimpleCommentsController",
                                controllerAs: "vm"
                            }

                        }


                    }
                )
            }
        );
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
     */