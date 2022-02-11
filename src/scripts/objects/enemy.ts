export default class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    let sprite: string = 'enemy' + Phaser.Math.Between(1, 3)
    super(scene, x, y, sprite)

    scene.add.existing(this)
    scene.physics.add.existing(this)
    scene.anims.create({
      key: 'rocket' + sprite,
      frames: this.anims.generateFrameNumbers(sprite, { frames: [0, 1] }),
      frameRate: 20,
      repeat: -1
    })
    this.setCollideWorldBounds(true)
    this.setBounce(1)
    this.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200))
    this.anims.play({ key: 'rocket' + sprite })
  }
}
