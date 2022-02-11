export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('fond', 'assets/desert-backgorund-looped.png')

    this.load.spritesheet('bullet', 'assets/laser-bolts.png', {
      frameWidth: 16,
      frameHeight: 16
    })

    this.load.spritesheet('ship', 'assets/ship.png', {
      frameWidth: 16,
      frameHeight: 24
    })

    this.load.spritesheet('enemy1', 'assets/enemy-small.png', {
      frameWidth: 16,
      frameHeight: 16
    })

    this.load.spritesheet('enemy2', 'assets/enemy-medium.png', {
      frameWidth: 32,
      frameHeight: 16
    })

    this.load.spritesheet('enemy3', 'assets/enemy-big.png', {
      frameWidth: 32,
      frameHeight: 32
    })
    this.load.bitmapFont('pixelFont', 'assets/font/font.png', 'assets/font/font.xml')
    // this.load.spritesheet('explosion', 'assets/explosion.png', 16, 16, 5)
  }

  create() {
    this.scene.start('MainScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
