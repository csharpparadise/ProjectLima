(function() {
    'use strict';

    angular.module('viewEdit', [])
        .directive('viewEdit', viewEdit);

    function viewEdit() {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
              console.log(element.children());
            }
        };
    }

}());
