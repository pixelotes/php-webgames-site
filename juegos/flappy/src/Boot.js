var Flappy = {};
Flappy.Boot = function(game) {};
Flappy.Boot.prototype = {
    preload: function() {
        this.load.image('preloaderBar', 'assets/preloader.gif');
    },
    create: function() {
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.scale.setScreenSize(true);
        this.state.start('Preloader');
    }
};

