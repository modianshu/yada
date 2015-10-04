(
    function()
    {
        'use strict';
        angular
            .module('app.simpleyada')
            .controller('SimpleYadaListController', SimpleYadaListController);

        function SimpleYadaListController(SimpleYada) {
            Logger.error("testing logger 1");
            var vm = this;
            vm.listOfSimpleYadas = SimpleYada.query();
        }
    }
)();
/**
 * 1. defining an annoymous function ()();
 * 2. ask angular object to get a module with a name app.simpleyada
 * and on that set the controller as name = SimpleYada and class as SimpleYada
 * 3. Declare the class SimpleYada == which is nothing but a function
 * function SimpleYada($http,$scope)
 *
 *define member variables vm as the encapsulation of all the scope data
 * ask $http to execute a get request to the url;
 * on success call the annonymous function (inner class) and pass the response object to it and set the array to vm.
 *
 */