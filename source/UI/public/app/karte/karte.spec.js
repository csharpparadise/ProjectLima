'use strict';

describe('karte', function() {

    var $location;
    var $scope;

    beforeEach(function() {
        angular.mock.module('ngRoute', 'karte.details');
        module('karte');
    });

    beforeEach(inject(function(_$rootScope_, _$controller_, _$location_) {
        $location = _$location_;
        $scope = _$rootScope_.$new();


        _$controller_('KartenController', {
            $scope: $scope,
            $location: $location
        });
    }));

    describe('$scope', function() {
        it('should have dummyValueForTesting with any value', function() {
            expect($scope.dummyValueForTesting).toBeDefined();
        });

        it('should have dummyValueForTesting with the value 42', function() {
            expect($scope.dummyValueForTesting).toBe(42);
        });
    });


    describe('openKarte', function() {
        it('should change location to /karte/:id', function() {
            spyOn($location, 'path');
            $scope.openKarte({
                id: 42
            });
            expect($location.path).toHaveBeenCalledWith('/karte/42');
        });
        it('should not change location if no karte with an id is given', function() {
            spyOn($location, 'path');
            $scope.openKarte({});

            expect($location.path).not.toHaveBeenCalled();
        });

        it('should not change location if no karte is given at all', function() {
            spyOn($location, 'path');
            $scope.openKarte();

            expect($location.path).not.toHaveBeenCalled();
        });
    });
});
