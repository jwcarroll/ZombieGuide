var Application;
(function (Application) {
    var app = angular.module('zombie-guide', ['ngRoute']);

    app.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '/home/welcome'
            }).when('/zombies', {
                templateUrl: '/zombie/list',
                controller: 'ZombieListController',
                controllerAs: 'ctrl'
            }).when('/zombies/:id', {
                templateUrl: '/zombie/detail',
                controller: 'ZombieDetailController',
                controllerAs: 'ctrl'
            }).when('/zombies/add', {
                templateUrl: '/zombie/detail',
                controller: 'ZombieDetailController',
                controllerAs: 'ctrl'
            });
        }]);

    Application.Module = app;
})(Application || (Application = {}));
//# sourceMappingURL=applicationModule.js.map
