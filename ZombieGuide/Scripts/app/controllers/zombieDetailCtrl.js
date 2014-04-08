var Controllers;
(function (Controllers) {
    var ZombieDetailController = (function () {
        function ZombieDetailController($location, zombieService) {
            this.$location = $location;
            this.zombieService = zombieService;
            this.init();
        }
        ZombieDetailController.prototype.init = function () {
            var _this = this;
            this.zombieService.getZombieImageNames().success(function (names) {
                _this.imageNames = names;
            });

            this.zombie = {};
        };

        ZombieDetailController.prototype.save = function () {
            var _this = this;
            this.saveCurrentZombie().success(function (z) {
                _this.$location.path('/zombies');
            });
        };

        ZombieDetailController.prototype.saveCurrentZombie = function () {
            return this.zombieService.createZombie(this.zombie);
        };
        ZombieDetailController.$inject = ['$location', 'zombieService'];
        return ZombieDetailController;
    })();

    Application.Module.controller('ZombieDetailController', ZombieDetailController);
})(Controllers || (Controllers = {}));
//# sourceMappingURL=zombieDetailCtrl.js.map
