var Controllers;
(function (Controllers) {
    var ZombieListController = (function () {
        function ZombieListController(zombieService) {
            this.zombieService = zombieService;
            this.loadZombies();
        }
        ZombieListController.prototype.loadZombies = function () {
        };

        ZombieListController.prototype.deleteZombie = function (zombie) {
        };
        ZombieListController.$inject = ['zombieService'];
        return ZombieListController;
    })();

    Application.Module.controller('ZombieListController', ZombieListController);
})(Controllers || (Controllers = {}));
//# sourceMappingURL=zombieListCtrl.js.map
