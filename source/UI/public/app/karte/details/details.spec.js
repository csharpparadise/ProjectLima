'use strict';

describe('karte/details', function(){
    var $scope;
    var kartenService;

    beforeEach(function() {
        angular.mock.module('ngRoute', 'kartenService');
        module('karte.details');
    });

    beforeEach(inject(function(_$rootScope_, _$controller_, _kartenService_) {
        $scope = _$rootScope_.$new();
        kartenService = _kartenService_;

        _$controller_('DetailsController', {
            $scope: $scope
        });
    }));

    describe('$scope', function() {
        it('should not call saveKarte when no Karte is given', function() {
            spyOn(kartenService, 'saveKarte');

            $scope.changeCard();

            expect(kartenService.saveKarte).not.toHaveBeenCalled();
        })
    });

})
