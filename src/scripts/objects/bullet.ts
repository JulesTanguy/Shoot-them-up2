import MainScene from '../scenes/mainScene'

export default class Bullet extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: MainScene) {
    let x = scene.ship.x
    let y = scene.ship.y - 16
    super(scene, x, y, 'bullet')

    scene.add.existing(this)
    scene.physics.add.existing(this)
    scene.anims.create({
      key: 'bulletAnim',
      frames: this.anims.generateFrameNumbers('bullet', { frames: [0, 1] }),
      frameRate: 20,
      repeat: -1
    })
    this.setVelocityY(-250)
    // this.anims.play({ key: 'bulletAnim' })

    scene.projectiles.add(this)
  }

  update(...args: any[]): void {
    if (this.y < 0) {
      this.destroy()
    }
  }
}
