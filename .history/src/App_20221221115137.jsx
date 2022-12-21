import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
function App () {
  return (
    <Canvas>
      <Sky sunPosition={[0, 0, 0]} />
    </Canvas>
  )
}

export default App
