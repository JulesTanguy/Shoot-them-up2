export default class Ship extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'ship', 2)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    scene.anims.create({
      key: 'rocket',
      frames: [2, 7]
    })
    this.setCollideWorldBounds(true)
    // this.anims.play({ key: 'rocket', frameRate: 24 })
  }
}
