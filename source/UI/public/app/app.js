angular.module('lima', [
  'ngMaterial',
  'spalte'
]).config(init);

init.$inject = ["$mdThemingProvider"];

function init($mdThemingProvider)
{
    $mdThemingProvider.theme("default")
        .primaryPalette("brown")
        .accentPalette("orange")
        .backgroundPalette("brown")
        //  .dark()
        ;
}
