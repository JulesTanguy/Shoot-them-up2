import Enemy from '../objects/enemy'
import Ship from '../objects/ship'

export default class MainScene extends Phaser.Scene {
  ship: Ship
  KeyLeft: Phaser.Input.Keyboard.Key
  KeyRight: Phaser.Input.Keyboard.Key
  enemies: Phaser.GameObjects.Group

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    const ENEMY_NUMBER = 4

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

    this.ship = new Ship(this, this.cameras.main.width / 2, this.cameras.main.height)

    this.enemies = this.add.group()
    for (let i = 0; i < ENEMY_NUMBER; i++) {
      this.enemies.add(new Enemy(this, Phaser.Math.Between(100, 200), 4))
    }

    let collisionHandler = () => {
      this.scene.start('GameOverScene')
    }
    this.physics.add.collider(this.ship, this.enemies, collisionHandler)
  }

  update() {
    this.ship.body.velocity.x = 0
    if (this.KeyLeft.isDown) {
      this.ship.body.velocity.x = -200
    }
    if (this.KeyRight.isDown) {
      this.ship.body.velocity.x = 200
    }
  }
}
