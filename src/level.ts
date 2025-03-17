import { FSprite } from '@fibbojs/2d'

function addGround(position: { x: number, y: number }) {
  const ground = new FSprite({
    texture: 'ground_0022.png',
    position,
  })
  ground.initCollider()
}

export function loadLevel() {
  // Create the ground
  for (let x = 0; x < 10; x++) {
    addGround({ x: x - 4.5, y: -1 })
  }

  // Add platforms
  addGround({ x: 6, y: 1 })
  addGround({ x: 7, y: 1 })
}
