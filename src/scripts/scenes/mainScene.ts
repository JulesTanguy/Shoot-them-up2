import Ship from '../objects/ship'

export default class MainScene extends Phaser.Scene {
  ship: Ship
  KeyLeft
  KeyRight

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    let background = this.add.image(this.cameras.main.width / 2, 0, 'fond')
    this.tweens.add({
      targets: background,
      y: 304,
      duration: 5000,
      repeat: -1,
      ease: Phaser.Math.Easing.Linear
    })

    this.KeyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
    this.KeyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

    // let ship = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height, 'ship', 2)
    // ship.setCollideWorldBounds(true)
    this.ship = new Ship(this, this.cameras.main.width / 2, this.cameras.main.height)
  }

  update() {
    if (this.KeyLeft.isDown) {
      this.ship.body.velocity.x = -200
    } else if (this.KeyRight.isDown) {
      this.ship.body.velocity.x = 200
    } else {
      this.ship.body.velocity.x = 0
    }
  }
}
