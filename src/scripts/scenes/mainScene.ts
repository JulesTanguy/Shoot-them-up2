import PhaserLogo from '../objects/phaserLogo'
import FpsText from '../objects/fpsText'
import Ship from '../objects/ship'

export default class MainScene extends Phaser.Scene {
  fpsText

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    // new PhaserLogo(this, this.cameras.main.width / 2, 0)
    this.fpsText = new FpsText(this)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '15px'
      })
      .setOrigin(1, 0)

    // let ship = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height, 'ship', 2)
    // ship.setCollideWorldBounds(true)
    let ship = new Ship(this, this.cameras.main.width / 2, this.cameras.main.height)
  }

  update() {
    this.fpsText.update()
  }
}
