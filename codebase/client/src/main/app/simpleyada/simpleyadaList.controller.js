(
    function()
    {
        'use strict';
        angular
            .module('app.simpleyada')
            .controller('SimpleYadaListController', SimpleYadaListController);

        function SimpleYadaListController(SimpleYada,$state) {
            var vm = this;
            vm.listOfSimpleYadas = SimpleYada.query();

            vm.delete = function (id) {
                Logger.debug("delete invoked");
                vm.wait = true;
                SimpleYada.delete({id: id}).$promise
                    .then(function (res) {
                        Logger.debug("delete success...");
                        $state.reload();
                    })
                    .catch(function (req) {
                        Logger.debug("delete failed...")
                    })
                    .finally(function () {
                        vm.wait = false;
                        Logger.debug("delete  finally")
                    });//no need to pass id as the $resource template knows how to get the id.

            }
        }
     }
)();
/**
 * 1. defining a self Invoking annoymous function ()();
 * 2. ask angular object to get a module with a name app.simpleyada
 * and on that set the controller as name = SimpleYada and class as SimpleYada
 * 3. Declare the  constructor for the class SimpleYada
 *
 *define member variables vm as the encapsulation of all the scope data
 * ask $http to execute a get request to the url;
 * on success call the annonymous function (inner class) and pass the response object to it and set the array to vm.
 *
 */