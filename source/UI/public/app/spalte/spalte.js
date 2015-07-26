(function() {
    'use strict';
    angular.module('spalte', ['karte'])
        .directive('limaSpalte', limaSpalte)
        .controller('SpaltenController', SpaltenController);

    function SpaltenController() {}

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
