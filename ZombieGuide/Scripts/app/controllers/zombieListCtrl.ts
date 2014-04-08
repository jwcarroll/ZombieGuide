module Controllers {

    class ZombieListController {

        static $inject = ['zombieService'];

        public zombies: Services.IZombie[];

        constructor(private zombieService: Services.ZombieService) {
            this.loadZombies();
        }

        public loadZombies() {
            this.zombieService.getZombies()
                .then(result => {
                    this.zombies = result.data;
                });
        }

        public deleteZombie(zombie: Services.IZombie) {
            if (angular.isDefined(zombie) && angular.isNumber(zombie.id)) {
                this.zombieService.deleteZombie(zombie.id)
                    .then(() => {
                        var index = this.zombies.indexOf(zombie);

                        this.zombies.splice(index, 1);
                    });
            }
        }
    }

    Application.Module.controller('ZombieListController', ZombieListController);
} 