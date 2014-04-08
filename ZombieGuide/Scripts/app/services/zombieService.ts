module Services {

    export interface IZombie {
        id?: number;
        name: string;
        notes: string;
        imageName?: string;
    }

    export class ZombieService {

        static $inject = ['$http'];

        constructor(private $http: ng.IHttpService) { }

        public getZombieImageNames(): ng.IHttpPromise<string[]> {
            return this.$http({
                url: '/api/zombieImage',
                method: 'GET',
                cache: true
            });
        }

        public getZombies(): ng.IHttpPromise<IZombie[]> {
            return this.$http({
                url: '/api/zombies',
                method: 'GET'
            });
        }

        public getZombie(id: number): ng.IHttpPromise<IZombie> {
            return this.$http({
                url: '/api/zombies/' + id,
                method: 'GET'
            });
        }

        public updateZombie(zombie: IZombie): ng.IHttpPromise<IZombie> {
            return this.$http({
                url: '/api/zombies/' + zombie.id,
                method: 'PUT',
                data: zombie
            });
        }

        public createZombie(zombie: IZombie): ng.IHttpPromise<IZombie> {
            return this.$http({
                url: '/api/zombies',
                method: 'POST',
                data: zombie
            });
        }

        public deleteZombie(id: number): ng.IHttpPromise<IZombie> {
            return this.$http({
                url: '/api/zombies/' + id,
                method: 'DELETE'
            });
        }
    }

    Application.Module.service('zombieService', ZombieService);
} 