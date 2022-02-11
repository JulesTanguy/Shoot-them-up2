export default class GameOverScene extends Phaser.Scene {
  KeyEnter: Phaser.Input.Keyboard.Key

  constructor() {
    super({ key: 'GameOverScene' })
  }

  create() {
    // this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'Game Over').setOrigin()
    this.add
      .bitmapText(this.cameras.main.width / 2, this.cameras.main.height / 2, 'pixelFont', 'GAME OVER')
      .setOrigin()
      .setScale(2)
    this.add
      .bitmapText(this.cameras.main.width / 2, this.cameras.main.height / 2 + 15, 'pixelFont', 'press enter to restart')
      .setOrigin()

    this.KeyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
  }

  update() {
    if (this.KeyEnter.isDown) {
      this.scene.start('MainScene')
    }
  }
}
