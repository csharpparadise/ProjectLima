(function(window, document, undefined) {
    'use strict';

    angular.module('karte.details', ['kartenService'])
        .controller('DetailsController', DetailsController)
        .config(defineRoutes);

    defineRoutes.$inject = ['$routeProvider'];
    DetailsController.$inject = ['$scope', '$routeParams', 'kartenService'];

    function defineRoutes($routeProvider) {
        $routeProvider.when('/app/karte/:karteId', {
            templateUrl: 'app/karte/details/details.html',
            controller: 'DetailsController'
        });
    }

    function DetailsController($scope, $routeParams, kartenService) {

        $scope.changeCard = function() {
          kartenService.saveKarte($scope.karte);
        };

        function loadKarteDetails(id) {
            kartenService.getKarteById(id)
                .then(function(karte) {
                    $scope.karte = karte;
                });
            $scope.karteId = id;
        }

        loadKarteDetails($routeParams.karteId);
    }
})(window, document);
