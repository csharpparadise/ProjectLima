(function() {
    'use strict';
    angular.module('board', ['spalte'])
        .factory('boardService', boardService)
        .controller('BoardController', BoardController)
        .config(defineRoutes);

    BoardController.$inject = ['$scope', 'boardService'];
    boardService.$inject = ['$http', '$q'];

    function BoardController($scope, boardService)
    {
        console.log('Hallo?!');

        boardService.getData().then(function(spalten)
        {
            console.log(spalten);
            $scope.spalten = spalten;
        });
    }

    function boardService($http, $q) {
        var result = {};

        result.getData = function()
        {
            var deferred = $q.defer();
            $http.get('http://localhost:51111/board')
                .success(function (spalten)
                {
                    deferred.resolve(spalten);
                })
                .error(function ()
                {
                    deferred.reject();
                });

            return deferred.promise;
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
