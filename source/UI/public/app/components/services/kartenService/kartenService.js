(function() {
    'use strict';

    angular.module('kartenService', [])
        .factory('kartenService', kartenService);

    kartenService.$inject = ['$http', '$q'];

    function kartenService($http, $q) {
        var result = {};

        result.getKarteById = function(id) {

            var deferred = $q.defer();
            $http.get('http://lima-service.azurewebsites.net/karte/' + id)
                .success(function(karte) {
                    deferred.resolve(karte);
                })
                .error(function() {
                    deferred.reject();
                });

            return deferred.promise;
        };

        return result;
    }

}());
