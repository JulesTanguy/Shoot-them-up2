export default class Ship extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'ship')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    scene.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('ship', { frames: [2, 7] }),
      frameRate: 20,
      repeat: -1
    })

    scene.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('ship', { frames: [4, 9] }),
      frameRate: 20
    })

    scene.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('ship', { frames: [0, 5] }),
      frameRate: 20
    })

    this.setCollideWorldBounds(true)
  }
}
