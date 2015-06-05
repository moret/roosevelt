var Preloader = function (game) {
  this.asset = null;
  this.ready = false;
};

Preloader.prototype = {
  preload: function () {
    this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);

    this.load.image('sky', 'assets/sky.png');
    this.load.image('city-background', 'assets/city-background.png');
    this.load.image('city-foreground', 'assets/city-foreground.png');

    this.load.json('sprites_atlas', 'assets/sprites.json');
    this.load.atlasJSONHash('chibi', 'assets/sprites.png', 'assets/sprites.json');
  },

  create: function () {
    this.asset.cropEnabled = false;
  },

  update: function () {
    if (!!this.ready) {
      this.game.state.start('Menu');
    }
  },

  onLoadComplete: function () {
    this.ready = true;
  }
};

module.exports = Preloader;
