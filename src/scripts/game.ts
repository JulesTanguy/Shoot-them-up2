import 'phaser'
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import GameOverScene from './scenes/gameOverScene'

const DEFAULT_WIDTH = 256
const DEFAULT_HEIGHT = 192

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#000000',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [PreloadScene, MainScene, GameOverScene],
  physics: {
    default: 'arcade',
    arcade: {
      // debug: true
      // gravity: { y: 400 }
    }
  },
  pixelArt: true
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
})
