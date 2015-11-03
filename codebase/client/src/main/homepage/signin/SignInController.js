function SignInController($state, $stateParams) {
    var vm = this;
    vm.signin = function(){
        //alert("clicked")
        window.location.href = "/client/index.html#/grading";
    };
}
