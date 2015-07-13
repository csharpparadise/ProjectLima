(function() {
    'use strict';
    angular.module('board', ['spalte'])
        .factory('boardService', boardService)
        .controller('BoardController', BoardController)
        .config(defineRoutes);

    BoardController.$inject = ['$scope', 'boardService'];

    function BoardController($scope, boardService) {
        $scope.spalten = boardService.getData();
    }

    function boardService() {
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

    defineRoutes.$inject = ['$routeProvider'];
    function defineRoutes($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/board/board.html',
            controller: 'BoardController'
        });
    }


}());
