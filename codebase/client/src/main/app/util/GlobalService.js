(function () {
        'use strict';
        angular
            .module('app')
            .factory('GlobalService' , GlobalService);

        function GlobalService() {
            var variables=this;
            variables.REST_SERVER = "http://localhost:8080/yadaserver/api/";
            return {variables:variables};
        }
})();