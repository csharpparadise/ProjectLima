(function()
{
    "use strict";

    angular.module("karte", [])
        .factory("kartenService", kartenService)
        .directive("limaKarte", limaKarte)
        .controller("KartenController", KartenController);

    KartenController.$inject = ["$scope", "kartenService"];

    function kartenService()
    {
        var result = {};

        result.getKarten = function(spaltenId)
        {
            var karten = [];

            karten.push(
            {
                id: 0,
                title: "Karte 1",
                description: "Desc 1"
            });
            karten.push(
            {
                id: 1,
                title: "Karte 2",
                description: "Desc 2"
            });

            return karten;
        };

        return result;
    }

    function limaKarte() {
      return {
        restrict: 'AE',
        templateUrl: 'app/karte/karte.html',
        controller: 'KartenController'
      }
    }

    function KartenController($scope, kartenService)
    {
        $scope.karten = kartenService.getKarten();
    }

}());
