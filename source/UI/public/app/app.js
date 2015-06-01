angular.module('lima', [
  'ngMaterial',
  'spalte',
  'karte'
]).config(init);

init.$inject = ["$mdThemingProvider"];

function init($mdThemingProvider)
{
    // $mdThemingProvider.theme("default")
    //     .primaryPalette("brown")
    //     .accentPalette("orange")
    //     .backgroundPalette("brown")
        //  .dark()
        // ;
}
