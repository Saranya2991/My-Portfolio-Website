import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Particles from './particles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='relative bg-black min-h-screen overflow-x-hidden'>
  <div className='fixed inset-0 z-10 pointer-events-none'>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
  </div>
  <div className="relative z-0">
        <App />
      </div>
</div>

  </StrictMode>,
)
