(function() {
    'use strict';

    angular.module('karte', ['karte.details'])
        .directive('limaKarte', limaKarte)
        .controller('KartenController', KartenController);

    KartenController.$inject = ['$scope', '$location'];

    function limaKarte() {
        return {
            scope: {
                karte: '=karte'
            },
            restrict: 'AE',
            templateUrl: 'app/karte/karte.html',
            controller: 'KartenController'
        };
    }

    

    function KartenController($scope, $location) {
        $scope.dummyValueForTesting = 42;

        $scope.openKarte = function (karte) {
            if (karte && karte.id) {
                $location.path('/app/karte/' + karte.id);
            }
        };
    }

}());
