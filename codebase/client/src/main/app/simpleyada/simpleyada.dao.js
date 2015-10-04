(
    function()
    {
        'use strict';
        angular
            .module('app.simpleyada')
            .factory('SimpleYada', SimpleYada);

        function SimpleYada($resource)
        {
            return $resource("http://localhost:8080/yadaserver/api/simpleyada/:yadaId");
        }
    }
)();