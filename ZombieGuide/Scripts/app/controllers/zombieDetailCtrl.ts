module Controllers {

    interface IZombieRouteParams {
        id?: string;
    }

    class ZombieDetailController {
        public static $inject = ['$routeParams', '$location', 'zombieService'];

        public zombie: Services.IZombie;
        public imageNames: string[];

        constructor(
            private $routeParams: IZombieRouteParams,
            private $location: ng.ILocationService,
            private zombieService: Services.ZombieService) {
            this.init();
        }

        private init() {
            this.zombieService.getZombieImageNames()
                .success(names => {
                    this.imageNames = names;
                });

            var id = parseInt(this.$routeParams.id, 10);

            if (isNaN(id)) {
                this.zombie = <Services.IZombie>{};
            } else {
                this.zombieService.getZombie(id)
                    .success(z => {
                        this.zombie = z;
                    });
            }
        }

        public save() {
            this.saveCurrentZombie()
                .success(z => {
                    this.$location.path('/zombies');
                });
        }

        private saveCurrentZombie(): ng.IHttpPromise<Services.IZombie> {
            if (angular.isDefined(this.zombie.id)) {
                return this.zombieService.updateZombie(this.zombie);
            } else {
                return this.zombieService.createZombie(this.zombie);
            }
        }
    }

    Application.Module.controller('ZombieDetailController', ZombieDetailController);
}