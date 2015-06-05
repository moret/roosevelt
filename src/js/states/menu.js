var Menu = function () {
  this.text = null;
};

Menu.prototype = {
  create: function () {
    var x = this.game.width / 2;
    var y = this.game.height / 2;

    var style = { font: "3em Arial", fill: "#ffffff" };
    this.text = this.add.text(x - 300, y - 200, "ESC start/stop\nX      attack", style);

    var escKey = this.input.keyboard.addKey(Phaser.Keyboard.ESC);
    escKey.onDown.add(this.onEscInput, this);
  },

  update: function () {
  },

  onEscInput: function () {
    this.game.state.start(playerState.currentLevel);
  }
};

module.exports = Menu;
