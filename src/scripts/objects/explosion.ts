export default class Explosion extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'explosion')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    scene.anims.create({
      key: 'explosion',
      frames: this.anims.generateFrameNumbers('explosion', { start: 0, end: 4 }),
      frameRate: 20,
      hideOnComplete: true
    })
    this.anims.play({ key: 'explosion' })
  }
}
