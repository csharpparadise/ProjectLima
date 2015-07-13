(function() {
    'use strict';
    angular.module('spalte', [])
        .directive('limaSpalte', limaSpalte)
        .controller('SpaltenController', SpaltenController);

    function SpaltenController($scope) {
    }

    function limaSpalte() {
        return {
            scope: {
              spalte: '=spalte'
            },
            restrict: 'AE',
            templateUrl: 'app/spalte/spalte.html',
            controller: 'SpaltenController'
        };
    }

}());
