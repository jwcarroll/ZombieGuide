module Controllers {

    class ZombieListController {

        static $inject = ['zombieService'];

        public zombies: any[];

        constructor(private zombieService: Services.ZombieService) {
            this.loadZombies();
        }

        public loadZombies() {
            
        }

        public deleteZombie(zombie: Services.IZombie) {
            
        }
    }

    Application.Module.controller('ZombieListController', ZombieListController);
} 