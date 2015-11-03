(function () {
        'use strict';
        angular
            .module('app.signup')
            .factory('Signup', Signup);

        function Signup($resource) {
            return $resource("http://localhost:8080/yadaserver/api/signup");
        }
    })();