{
    (function() {
        'use strict';
        angular.module('spalte', [])
            .factory('spaltenService', spaltenService)
            .controller('SpaltenController', SpaltenController)
            .config(defineRoutes);

        defineRoutes.$inject = ['$routeProvider'];
        SpaltenController.$inject = ['$scope', 'spaltenService'];

        function defineRoutes($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'app/spalte/spalte.html',
                controller: 'SpaltenController'
            });
        }

        function SpaltenController($scope, spaltenService) {
            $scope.spalten = spaltenService.getData();
        }

        function spaltenService() {
            var result = {};

            result.getData = function() {
                var spalten = [];

                spalten.push({
                    id: 0,
                    title: 'Spalte 1'
                });
                spalten.push({
                    id: 1,
                    title: 'Spalte 2'
                });

                return spalten;
            };

            return result;
        }
    }());

}
