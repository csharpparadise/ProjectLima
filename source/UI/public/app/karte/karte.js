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
        $scope.openKarte = function(karte) {

            if (karte && karte.id)
            $location.path('/karte/' + karte.id);
        };
    }

}());
