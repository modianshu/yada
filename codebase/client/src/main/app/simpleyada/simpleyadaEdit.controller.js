(
    function()
    {
        'use strict';
        angular
            .module('app.simpleyada')
            .controller('SimpleYadaEditController', SimpleYadaEditController);

        function SimpleYadaEditController(SimpleYada,$state,$stateParams) {
            var vm = this;
            vm.yadaId = $stateParams.id;
            if (vm.yadaId==null)
            {
                //create
                vm.yada = new SimpleYada();
            }
            else
            {
                //edit
                console.log($stateParams.id);
                vm.yada = SimpleYada.get({id: vm.yadaId});
            }

            vm.save = function()
            {
                //Step 1: put the wait cursor on
                //Step 2: Call the save action on backend.
                //Step 3: wait for the async call to finish.
                //Step 4: remove the wait cursor.
                //Step 5: change the state to listing
                Logger.debug("save function definition of SimpleYadaEditController");
                vm.wait=true;
                vm.yada.$save()
                    .then(function(res){Logger.debug("$save success..."); $state.go("simpleYadaList");})
                    .catch(function(req){Logger.debug("$save failed...")})
                    .finally(function(){vm.wait=false;Logger.debug("$save  finally")});//no need to pass id as the $resource template knows how to get the id.


            }
        }
    }
)();
