module Application {
    var app: ng.IModule = angular.module('zombie-guide', ['ngRoute']);

    app.config(['$routeProvider', ($routeProvider: ng.route.IRouteProvider) => {
        $routeProvider
            .when('/', {
                templateUrl: '/home/welcome'
            })
            .when('/zombies', {
                templateUrl: '/zombie/list',
                controller: 'ZombieListController',
                controllerAs: 'ctrl'
            })
            .when('/zombies/:id', {
                templateUrl: '/zombie/detail',
                controller: 'ZombieDetailController',
                controllerAs: 'ctrl'
            })
            .when('/zombies/add', {
                templateUrl: '/zombie/detail',
                controller: 'ZombieDetailController',
                controllerAs: 'ctrl'
            });
    }]);

    export var Module = app;
}