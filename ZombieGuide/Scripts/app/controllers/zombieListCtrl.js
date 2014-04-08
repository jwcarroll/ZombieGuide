var Controllers;
(function (Controllers) {
    var ZombieListController = (function () {
        function ZombieListController(zombieService) {
            this.zombieService = zombieService;
            this.loadZombies();
        }
        ZombieListController.prototype.loadZombies = function () {
            var _this = this;
            this.zombieService.getZombies().then(function (result) {
                _this.zombies = result.data;
            });
        };

        ZombieListController.prototype.deleteZombie = function (zombie) {
            var _this = this;
            if (angular.isDefined(zombie) && angular.isNumber(zombie.id)) {
                this.zombieService.deleteZombie(zombie.id).then(function () {
                    var index = _this.zombies.indexOf(zombie);

                    _this.zombies.splice(index, 1);
                });
            }
        };
        ZombieListController.$inject = ['zombieService'];
        return ZombieListController;
    })();

    Application.Module.controller('ZombieListController', ZombieListController);
})(Controllers || (Controllers = {}));
//# sourceMappingURL=zombieListCtrl.js.map
