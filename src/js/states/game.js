var Player = require('../entities/player');

var Game = function () {
  this.testentity = null;
  this.backgroundSpeed = 0.2;
  this.foregroundSpeed = 3;
};

Game.prototype = {
  create: function () {
    var x = this.game.width / 3;
    var y = 2 * (this.game.height / 3);

    this.sky = this.add.tileSprite(0, 0, this.game.width, this.game.width, 'sky');
    this.cityBackground = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'city-background');
    this.cityForeground = this.add.tileSprite(0, 0, this.world.width, this.world.height, 'city-foreground');

    this.testentity = new Player(this.game, x, y);

    var xKey = this.input.keyboard.addKey(Phaser.Keyboard.X);
    xKey.onDown.add(this.testentity.onAttackInput, this.testentity);

    this.rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.leftKey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);

    this.testentity.rightKey = this.rightKey;
    this.testentity.leftKey = this.leftKey;

    var escKey = this.input.keyboard.addKey(Phaser.Keyboard.ESC);
    escKey.onDown.add(this.onEscInput, this);
  },

  update: function () {
    if (this.testentity.isMovingRight) {
      this.cityBackground.tilePosition.x -= this.backgroundSpeed;
      this.cityForeground.tilePosition.x -= this.foregroundSpeed;
    } else {
    }
  },

  onEscInput: function () {
    this.game.state.start('Menu');
  }
};

module.exports = Game;
