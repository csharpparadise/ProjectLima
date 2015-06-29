(function() {
    'use strict';

    angular.module('karte', [])
        .factory('kartenService', kartenService)
        .directive('limaKarte', limaKarte)
        .controller('KartenController', KartenController);

    KartenController.$inject = ['$scope', '$location', '$http', 'kartenService'];

    function kartenService($http, $q) {
        var result = {};

        result.getKarten = function(spaltenId) {
            var karten = [];

            karten.push({
                id: 0,
                title: 'Karte 1',
                description: 'Desc 1'
            });
            karten.push({
                id: 1,
                title: 'Karte 2',
                description: 'Desc 2'
            });

            return karten;
        };

        result.getKarteById = function(id) {
            //return result.getKarten()[0];
            // TODO: Webservice Call
            var deferred = $q.defer();
            $http.get('/sampleData.json')
                .success(function(karten) {
                    deferred.resolve(karten[id]);
                })
                .error(function() {
                    deferred.reject();
                });

            return deferred.promise;
        };

        return result;
    }

    function limaKarte() {
        return {
            restrict: 'AE',
            templateUrl: 'app/karte/karte.html',
            controller: 'KartenController'
        };
    }

    function KartenController($scope, $location, kartenService) {
        $scope.karten = kartenService.getKarten();

        $scope.openKarte = function(karte) {
            $location.path('/karte/' + karte.id);
        };
    }

}());
