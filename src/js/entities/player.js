var Player = function (game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'chibi', 'idle-01.png');
  game.add.existing(this);

  this.attackAnimation = this.animations.add('attack', [
    'attack-01.png',
    'attack-02.png',
    'attack-03.png',
    'attack-05.png',
    'attack-04.png',
    'attack-01.png'
  ], 12, false, false);
  this.attackAnimation.onComplete.add(this.attackFinished, this);

  this.walkingAnimation = this.animations.add('walk', [
    'walk-01.png',
    'walk-02.png',
    'walk-03.png',
    'walk-04.png'
  ], 8, true, false);

  this.animations.add('idle', [
    'idle-01.png',
    'idle-02.png'
  ], 1, true, false);
  this.animations.play('idle');
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

/**
 * Automatically called by World.update
 */
Player.prototype.update = function() {
  if (this.willAttack) {
    this.animations.play('attack');
    this.isAttacking = true;
  }

  if (!this.isAttacking) {
    if (this.rightKey.isDown || this.leftKey.isDown) {
      this.animations.play('walk');
    } else {
      this.animations.play('idle');
    }
  }

  this.willAttack = false;
};

Player.prototype.attackFinished = function() {
  this.animations.play('idle');
  this.isAttacking = false;
};

Player.prototype.onAttackInput = function () {
  this.willAttack = true;
};

module.exports = Player;
