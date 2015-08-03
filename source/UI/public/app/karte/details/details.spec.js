'use strict';

describe('karte.details', function() {

    var $scope;
    var $routeParams;
    var $q;
    var kartenService;
    var createController;

    beforeEach(function() {
        angular.mock.module('ngRoute', 'kartenService');
        module('karte.details');
    });

    beforeEach(inject(function(_$rootScope_, _$controller_, _$routeParams_, _$q_, _kartenService_) {
        $scope = _$rootScope_.$new();
        $routeParams = _$routeParams_;
        $q = _$q_;
        kartenService = _kartenService_;

        

        createController = function () {
            return _$controller_('DetailsController', {
                $scope: $scope,
                $routeParams: $routeParams,
                kartenService: kartenService
            });
        }
    }));

    describe('loadKarteDetails', function () {
        it('Sollte der Detailscontroller instanziiert werden, dann sollte getKarteById aufgerufen werden', function() {
            spyOn(kartenService);
            createController();

            expect($scope.karteId).toBe(42);
        });
    });
});
