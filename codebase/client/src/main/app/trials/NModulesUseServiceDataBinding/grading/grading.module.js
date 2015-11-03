(function () {
    'use strict';
    angular.module('app.grading', [])
        .service("DatasharingService",function(){
            var data ={ lastUpdated: new Date(), selectedContent: "none" };
            return {data:data};
            }
        )
        .config
        (
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state
                (
                    'grading',
                    {
                        url: '/grading',
                        templateUrl: 'src/main/app/grading/Grading.html',
                        controller: 'GradingController',
                        controllerAs: "vm"

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