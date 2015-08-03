(function() {
    'use strict';

    angular.module('viewEdit', [])
        .directive('viewEdit', viewEdit);

    function viewEdit($compile) {
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
                var children = element.children();
                var viewElement = angular.element(children[0]);
                var editElement = angular.element(children[1]);
                var controlId = "_"+guidEx();
                var htmlControlId = "editing." + controlId;

                if (viewElement) {
                    viewElement.addClass("editable");
                    viewElement.attr("ng-hide", htmlControlId);
                    viewElement.attr("ng-click", htmlControlId + "=true");
                }

                if (editElement) {
                    editElement.attr("ng-show", htmlControlId);
                }

                recompileElement($compile, viewElement, scope);
                recompileElement($compile, editElement, scope);

                // console.log(element.children());
            }
        };
    }

    function recompileElement(compile, element, scope) {
        // Unbind all previous event handlers, this is
        // necessary to remove previously linked models.
        element.unbind();
        compile(element)(scope);
    }

    function guidEx() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + s4() + s4() +
            s4() + s4() + s4() + s4();
    }
}());
