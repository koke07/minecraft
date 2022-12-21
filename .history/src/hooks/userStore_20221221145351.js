import { nanoid } from 'nanoid'
import create from 'zustand'
export const userStore = create(set=> ({
  texture: 'dirt',
  cubes: [{
    id: nanoid(),
    position: [1, 1, 1],
    texture: 'dirt'
  }],
  addCube: () => {},
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {}
}))
