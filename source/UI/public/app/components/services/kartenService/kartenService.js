(function() {
    'use strict';

    angular.module('kartenService', [])
        .factory('kartenService', kartenService);

    kartenService.$inject = ['$http', '$q'];

    function kartenService($http, $q) {
        var result = {};

        result.getKarteById = function(id) {

            var deferred = $q.defer();
            $http.get('http://localhost:49000/karte/' + id)
                .success(function(karte) {
                    deferred.resolve(karte);
                })
                .error(function() {
                    deferred.reject();
                });

            return deferred.promise;
        };

        result.saveKarte = function(karte) {
            console.log(karte);
            var deferred = $q.defer();
            $http.post('http://localhost:49000/karte/' + karte.id, karte)
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
