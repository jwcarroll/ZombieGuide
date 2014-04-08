module Controllers {

    class ZombieDetailController {
        public static $inject = ['$location', 'zombieService'];

        public zombie: Services.IZombie;
        public imageNames: string[];

        constructor(
            private $location: ng.ILocationService,
            private zombieService: Services.ZombieService) {
            this.init();
        }

        private init() {
            this.zombieService.getZombieImageNames()
                .success(names => {
                    this.imageNames = names;
                });

            this.zombie = <Services.IZombie>{};
        }

        public save() {
            this.saveCurrentZombie()
                .success(z => {
                    this.$location.path('/zombies');
                });
        }

        private saveCurrentZombie(): ng.IHttpPromise<Services.IZombie> {
            return this.zombieService.createZombie(this.zombie);
        }
    }

    Application.Module.controller('ZombieDetailController', ZombieDetailController);
} 