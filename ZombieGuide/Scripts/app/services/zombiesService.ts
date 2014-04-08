interface IZombie {
    id?: number;
    name: string;
    notes: string;
    imageName?: string;
}

class ZombiesService {
    public getZombies() {
        $.ajax('/api/zombies', {
            type: 'GET'
        }).then(result => {
            alert(JSON.stringify(result));
        });
    }

    public createZombie(zombie: IZombie) {
        $.ajax('/api/zombies', {
            type: 'POST',
            data: zombie
        }).then(result => {
            alert(JSON.stringify(result));
        });
    }
}

var service = new ZombiesService();

service.createZombie({ name: 'Fred', notes: 'He will eat your face!' });