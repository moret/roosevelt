var Player = require('../entities/player');

var Game = function () {
  this.testentity = null;
};

Game.prototype = {
  create: function () {
    var x = (this.game.width / 2) - 100;
    var y = (this.game.height / 2) - 50;

    this.testentity = new Player(this.game, x, y);
    this.testentity.anchor.setTo(0.5, 0.5);

    var xKey = this.input.keyboard.addKey(Phaser.Keyboard.X);
    xKey.onDown.add(this.testentity.onAttackInput, this.testentity);

    this.input.onDown.add(this.onInputDown, this);
  },

  update: function () {
  },

  onInputDown: function () {
    this.game.state.start('Menu');
  }
};

module.exports = Game;
