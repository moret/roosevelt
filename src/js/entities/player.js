var Player = function (game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'ninja', 'Idle__001.png');
  game.add.existing(this);
  this.anchor.setTo(0.5, 0.55);

  this.attackAnimation = this.animations.add(
    'attack', Phaser.Animation.generateFrameNames('Attack__', 1, 10, '.png', 3),
    24, false, false
  );
  this.attackAnimation.onComplete.add(this.attackFinished, this);

  this.animations.add(
    'run', Phaser.Animation.generateFrameNames('Run__', 1, 10, '.png', 3),
    24, true, false
  );

  this.animations.add(
    'idle', Phaser.Animation.generateFrameNames('Idle__', 1, 9, '.png', 3),
    6, true, false
  );

  this.animations.play('idle');
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
  this.isMovingRight = false;

  if (this.willAttack) {
    this.animations.play('attack');
    this.isAttacking = true;
    this.anchor.setTo(0.3, 0.5);
  }

  if (!this.isAttacking) {
    if (this.rightKey.isDown || this.leftKey.isDown) {
      this.isMovingRight = true;
      this.anchor.setTo(0.5, 0.5);
      this.animations.play('run');
    } else {
      this.anchor.setTo(0.5, 0.55);
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
