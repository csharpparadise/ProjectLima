'use strict';

describe('karte/details', function() {
    var $scope;
    var kartenService;
    var $routeParams;
    var createCrtl;
    var $q;

    beforeEach(function() {
        angular.mock.module('ngRoute', 'kartenService');
        module('karte.details');
    });

    beforeEach(inject(function(_$rootScope_, _$controller_, _$routeParams_, _kartenService_, _$q_) {
        $scope = _$rootScope_.$new();
        kartenService = _kartenService_;
        $routeParams = _$routeParams_;
        $q = _$q_;

        createCrtl = function() {
            return _$controller_('DetailsController', {
                $scope: $scope
            });
        };
    }));

    describe('$scope', function() {
        it('should not call saveKarte when no Karte is given', function() {
            createCrtl();

            spyOn(kartenService, 'saveKarte');
            $scope.changeCard();
            expect(kartenService.saveKarte).not.toHaveBeenCalled();
        });

        it('should scope have karteid after init', function() {
            $routeParams.karteId = 42;

            createCrtl();
            expect($scope.karteId).toBe(42);
        })

        it('should have karte after init', function() {
            $routeParams.karteId = 42;

            // var deferred = $q.defer();
            // spyOn(kartenService, 'getKarteById').and.returnValue(deferred.promise);
            // deferred.resolve(21);

            spyOn(kartenService, 'getKarteById').and.callFake(function(id) {
                var deferred = $q.defer();
                deferred.resolve(id);
                return deferred.promise;
            });

            console.log(jasmine.version);
            createCrtl();
            $scope.$digest();
            expect($scope.karte).toBeDefined();
            expect($scope.karte).toBe($routeParams.karteId);
        })
    });
})
