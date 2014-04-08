var Services;
(function (Services) {
    var ZombieService = (function () {
        function ZombieService($http) {
            this.$http = $http;
        }
        ZombieService.prototype.getZombieImageNames = function () {
            return this.$http({
                url: '/api/zombieImage',
                method: 'GET',
                cache: true
            });
        };

        ZombieService.prototype.getZombies = function () {
            return this.$http({
                url: '/api/zombies',
                method: 'GET'
            });
        };

        ZombieService.prototype.getZombie = function (id) {
            return this.$http({
                url: '/api/zombies/' + id,
                method: 'GET'
            });
        };

        ZombieService.prototype.updateZombie = function (zombie) {
            return this.$http({
                url: '/api/zombies/' + zombie.id,
                method: 'PUT',
                data: zombie
            });
        };

        ZombieService.prototype.createZombie = function (zombie) {
            return this.$http({
                url: '/api/zombies',
                method: 'POST',
                data: zombie
            });
        };

        ZombieService.prototype.deleteZombie = function (id) {
            return this.$http({
                url: '/api/zombies/' + id,
                method: 'DELETE'
            });
        };
        ZombieService.$inject = ['$http'];
        return ZombieService;
    })();
    Services.ZombieService = ZombieService;

    Application.Module.service('zombieService', ZombieService);
})(Services || (Services = {}));
//# sourceMappingURL=zombieService.js.map
