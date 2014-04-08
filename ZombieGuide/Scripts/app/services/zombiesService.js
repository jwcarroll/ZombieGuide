var ZombiesService = (function () {
    function ZombiesService() {
    }
    ZombiesService.prototype.getZombies = function () {
        $.ajax('/api/zombies', {
            type: 'GET'
        }).then(function (result) {
            alert(JSON.stringify(result));
        });
    };

    ZombiesService.prototype.createZombie = function (zombie) {
        $.ajax('/api/zombies', {
            type: 'POST',
            data: zombie
        }).then(function (result) {
            alert(JSON.stringify(result));
        });
    };
    return ZombiesService;
})();

var service = new ZombiesService();

service.createZombie({ name: 'Fred', notes: 'He will eat your face!' });
//# sourceMappingURL=zombiesService.js.map
