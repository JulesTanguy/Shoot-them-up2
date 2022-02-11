export default class Ship extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'ship')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    scene.anims.create({
      key: 'rocket',
      frames: this.anims.generateFrameNumbers('ship', { frames: [2, 7] }),
      frameRate: 20,
      repeat: -1
    })
    this.setCollideWorldBounds(true)
    this.anims.play({ key: 'rocket' })
  }
}
