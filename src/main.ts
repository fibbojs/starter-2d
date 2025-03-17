import './style.css'
import { FAttachedCamera, FComponentEmpty, FScene } from '@fibbojs/2d'
import { fDebug } from '@fibbojs/devtools'
import { FKeyboard } from '@fibbojs/event'
import { loadLevel } from './level'
import Character from './classes/Character'

(async () => {
  const scene = new FScene()
  await scene.init()
  await scene.initPhysics()
  // Debug the scene
  if (import.meta.env.DEV)
    fDebug(scene)

  // Create a death zone
  const deathZone = new FComponentEmpty({
    position: { x: 0, y: -5 },
    scale: { x: 20, y: 0.1 },
  })
  deathZone.initCollider()

  // Load level
  loadLevel()

  /**
   * Create character
   */
  const character = new Character()
  character.onCollisionWith(deathZone, () => {
    character.transform.position = { x: 0, y: 5 }
    console.log('Sprite collided with the death zone!')
  })

  // Create keyboard
  const keyboard = new FKeyboard()
  keyboard.onKeyDown('p', () => {
    character.transform.position = { x: 0, y: 5 }
  })

  // Attach a camera to the character
  scene.camera = new FAttachedCamera({
    target: character,
  })
})()
