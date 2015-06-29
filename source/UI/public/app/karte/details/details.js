(function(window, document, undefined) {
    'use strict';

    angular.module('karteDetails', ['karte'])
        .controller('DetailsController', DetailsController)
        .config(defineRoutes);

    defineRoutes.$inject = ['$routeProvider'];
    DetailsController.$inject = ['$scope', '$routeParams', 'kartenService'];

    function defineRoutes($routeProvider) {
        $routeProvider.when('/karte/:karteId', {
            templateUrl: 'app/karte/details/details.html',
            controller: 'DetailsController'
        });
    }

    function DetailsController($scope, $routeParams, kartenService) {

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
