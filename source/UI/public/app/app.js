(function(window, document, undefined) {
    'use strict';

    angular.module('lima', [
        'ngMaterial',
        'ngRoute',
        'board',
        'viewEdit'
    ]).config(init);

    init.$inject = ['$mdThemingProvider', '$routeProvider', '$locationProvider'];

    function init($mdThemingProvider, $routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.otherwise({
            redirectTo: '/app'
        });
        // $mdThemingProvider.theme("default")
        //     .primaryPalette("brown")
        //     .accentPalette("orange")
        //     .backgroundPalette("brown")
        //  .dark()
        // ;
    }
})(window, document);
