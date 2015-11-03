function GradingController($state, $stateParams)
{
            var vm = this;
            vm.launch = function(){$state.go("grading.submissionlist")};
}
