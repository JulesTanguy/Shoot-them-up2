import Bullet from '../objects/bullet'
import Enemy from '../objects/enemy'
import Explosion from '../objects/explosion'
import Ship from '../objects/ship'

export default class MainScene extends Phaser.Scene {
  ship: Ship
  KeyLeft: Phaser.Input.Keyboard.Key
  KeyRight: Phaser.Input.Keyboard.Key
  KeyShoot: Phaser.Input.Keyboard.Key
  enemies: Phaser.GameObjects.Group
  lastTime: number
  projectiles: Phaser.GameObjects.Group
  score: number

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

    let scoreText = this.add.bitmapText(5, 5, 'pixelFont', '0')

    this.KeyLeft = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
    this.KeyRight = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
    this.KeyShoot = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

    this.ship = new Ship(this, this.cameras.main.width / 2, this.cameras.main.height)

    this.enemies = this.add.group()
    for (let i = 0; i < ENEMY_NUMBER; i++) {
      this.enemies.add(new Enemy(this, Phaser.Math.Between(100, 200), 4))
    }

    let collisionHandler = () => {
      this.scene.start('GameOverScene', { score: this.score })
    }
    this.physics.add.collider(this.ship, this.enemies, collisionHandler)

    let addEnemy = () => {
      this.enemies.add(new Enemy(this, Phaser.Math.Between(100, 200), 4))
    }
    let hitEnemy = (bullet: any, enemy: any) => {
      bullet.destroy()
      enemy.destroy()
      console.log(typeof enemy)
      new Explosion(this, enemy.x, enemy.y)
      this.score++
      scoreText.setText(this.score.toString())
      this.time.addEvent({
        delay: Phaser.Math.Between(1000, 3000),
        callback: addEnemy
      })
    }
    this.projectiles = this.add.group()
    this.physics.add.overlap(this.projectiles, this.enemies, hitEnemy)
    this.lastTime = 0
    this.score = 0
  }

  update(time: number) {
    this.ship.body.velocity.x = 0
    if (this.KeyLeft.isDown) {
      this.ship.body.velocity.x = -200
    }
    if (this.KeyRight.isDown) {
      this.ship.body.velocity.x = 200
    }

    if (this.KeyShoot.isDown) {
      if (time - this.lastTime >= 300) {
        new Bullet(this)
        this.lastTime = time
      }
    }

    for (var i = 0; i < this.projectiles.getChildren().length; i++) {
      let bullet = this.projectiles.getChildren()[i]
      bullet.update()
    }
  }
}
