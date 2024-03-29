﻿var Controllers;
(function (Controllers) {
    var ZombieDetailController = (function () {
        function ZombieDetailController($routeParams, $location, zombieService) {
            this.$routeParams = $routeParams;
            this.$location = $location;
            this.zombieService = zombieService;
            this.init();
        }
        ZombieDetailController.prototype.init = function () {
            var _this = this;
            this.zombieService.getZombieImageNames().success(function (names) {
                _this.imageNames = names;
            });

            var id = parseInt(this.$routeParams.id, 10);

            if (isNaN(id)) {
                this.zombie = {};
            } else {
                this.zombieService.getZombie(id).success(function (z) {
                    _this.zombie = z;
                });
            }
        };

        ZombieDetailController.prototype.save = function () {
            var _this = this;
            this.saveCurrentZombie().success(function (z) {
                _this.$location.path('/zombies');
            });
        };

        ZombieDetailController.prototype.saveCurrentZombie = function () {
            if (angular.isDefined(this.zombie.id)) {
                return this.zombieService.updateZombie(this.zombie);
            } else {
                return this.zombieService.createZombie(this.zombie);
            }
        };
        ZombieDetailController.$inject = ['$routeParams', '$location', 'zombieService'];
        return ZombieDetailController;
    })();

    Application.Module.controller('ZombieDetailController', ZombieDetailController);
})(Controllers || (Controllers = {}));
//# sourceMappingURL=zombieDetailCtrl.js.map
