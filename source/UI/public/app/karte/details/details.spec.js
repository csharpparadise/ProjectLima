'use strict';

describe('karte.details', function () {

    var $scope;
    var $routeParams;
    var kartenService;
    var controllerFactory;
    var $http;

    beforeEach(function() {
        angular.mock.module('ngRoute', 'kartenService');
        module('karte.details');
    });

    

    beforeEach(inject(function (_$rootScope_, _$controller_, _$routeParams_, _kartenService_, _$http_) {
        $http = _$http_;
        $routeParams = _$routeParams_;
        $scope = _$rootScope_.$new();
        kartenService = _kartenService_;
        
        
        controllerFactory = function () {
            return _$controller_('DetailsController', {
                $scope: $scope,
                $routeParams: _$routeParams_,
                kartenService: kartenService
            });
        }
    }));

    describe("loadKarteDetails", function () {
        it("Sollte mit KartenId 5 KarteId 5 setzen", function () {

            $routeParams.karteId = 5;
            controllerFactory();
            expect($scope.karteId).toBe(5);

        });
    });



    describe("loadKarteDetails", function () {
        it("Sollte mit KartenId 5 KarteId NICHT setzen", function () {

            //$routeParams.karteId = 5;
            controllerFactory();
            expect($scope.karteId).not.toBe(5);

        });
    });

    describe("loadKarteDetails", function () {
        it("KartenService enthält Methode getKarteById()", function () {
            expect(kartenService.getKarteById).toBeDefined();
           
        });
    });

    describe("loadKarteDetails", function () {
        it("KartenService enthält Methode getKarteById()", function () {
            //expect(kartenService.getKarteById(4)).toBeDefined();
            //console.log(kartenService.getKarteById(42));
            console.log($http);
            //expect($http.post).toHaveBeenCalled();
        });
    });

});
