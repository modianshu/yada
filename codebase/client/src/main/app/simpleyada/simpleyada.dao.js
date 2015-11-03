(
    function()
    {
        'use strict';
        angular
            .module('app.simpleyada')
            .factory('SimpleYada', SimpleYada);

        function SimpleYada($resource,GlobalService)
        {
            return $resource(GlobalService.variables.REST_SERVER+"simpleyada/:id");
        }
    }
)();