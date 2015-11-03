(function() {
    'use strict';

    angular.module('app', [ 'ngResource','ui.router'])
    .controller("HomePageContentController",HomePageContentController)
    .controller("HeaderController",HeaderController)
    .controller("FooterController",FooterController)
    .controller("SignInController",SignInController)
    .controller("SignupCoachController",SignupCoachController)
    .controller("SignupStudentController",SignupStudentController)
    .controller("CoachDashboardController",CoachDashboardController)
    .controller("ClassListController",ClassListController)
    .controller("ClassController",ClassController)
    .controller("AssignmentListController",AssignmentListController)
    .controller("AssignmentController",AssignmentController)
    .controller("CompetitionController",CompetitionController)
    .controller("CompetitionListController",CompetitionListController)
    .controller("GradesController",GradesController)
    .controller("GradingBoardController",GradingBoardController)
    .controller("ReviewCommentsController",ReviewCommentsController)
    .controller("StudentDashboardController",StudentDashboardController)
    .config
    (
        function($stateProvider, $urlRouterProvider)
        {
            $stateProvider
            .state
            (
                'home',
                {
                    url: '/',
                    views:
                    {
                        "main-box":
                        {
                            templateUrl: 'src/main/homepage/HomePageContent/HomePageContent.html',
                            controller: 'HomePageContentController',
                            controllerAs: "vm"
                        },
                        "header-box":
                        {
                            templateUrl: 'src/main/homepage/Header/Header.html',
                            controller: 'HeaderController',
                            controllerAs: "vm"
                        },
                        "footer-box":
                        {
                            templateUrl: 'src/main/homepage/Footer/Footer.html',
                            controller: 'FooterController',
                            controllerAs: "vm"
                        },
                        "signin-box@home":
                        {
                            templateUrl: 'src/main/homepage/SignIn/SignIn.html',
                            controller: 'SignInController',
                            controllerAs: "vm"
                        }
                    }
                }
            )
            .state
            (
                'home.signupstudent',
                {
                    url: 'signupstudent',
                    views: {
                        "main-box@": {
                            templateUrl: 'src/main/homepage/SignupStudent/SignupStudent.html',
                            controller: 'SignupStudentController',
                            controllerAs: "vm"
                        }
                    }
                }
            )
            .state
            (
                'home.signupcoach',
                {
                    url: 'signupcoach',
                    views: {
                        "main-box@": {
                            templateUrl: 'src/main/homepage/SignupCoach/SignupCoach.html',
                            controller: 'SignupCoachController',
                            controllerAs: "vm"
                        }
                    }
                }
            )
            .state
            (
                'home.student',
                {
                    url: 'student',
                    views: {
                        "main-box@": {
                            templateUrl: 'src/main/student/StudentDashboard/StudentDashboard.html',
                            controller: 'StudentDashboardController',
                            controllerAs: "vm"
                        }
                    }
                }
            )
            .state
            (
                'home.coach',
                {
                    url: 'coach',
                    views: {
                        "main-box@": {
                            templateUrl: 'src/main/coach/CoachDashboard/CoachDashboard.html',
                            controller: 'CoachDashboardController',
                            controllerAs: "vm"
                        }
                    }
                }
            )
            .state
            (
                'home.coach.classes',
                {
                    url: '/classes',
                    views: {
                        "coach-main-box@home.coach": {
                            templateUrl: 'src/main/coach/Class/ClassList.html',
                            controller: 'ClassListController',
                            controllerAs: "vm"
                        }
                    }
                }
            )
            .state
            (
                'home.coach.assignments',
                {
                    url: '/assignments',
                    views: {
                        "coach-main-box@home.coach": {
                            templateUrl: 'src/main/coach/Assignment/AssignmentList.html',
                            controller: 'AssignmentListController',
                            controllerAs: "vm"
                        }
                    }
                }
            )
            .state
            (
                'home.coach.grading',
                {
                    url: '/grading',
                    views: {
                        "coach-main-box@home.coach": {
                            templateUrl: 'src/main/coach/Grading/GradingBoard.html',
                            controller: 'GradingBoardController',
                            controllerAs: "vm"
                        }
                    }
                }
            )
            .state
            (
                'home.coach.competitions',
                {
                    url: '/competitions',
                    views: {
                        "coach-main-box@home.coach": {
                            templateUrl: 'src/main/coach/Competition/CompetitionList.html',
                            controller: 'CompetitionListController',
                            controllerAs: "vm"
                        }
                    }
                }
            );
            $urlRouterProvider.otherwise('/');
        }
    );
})();
