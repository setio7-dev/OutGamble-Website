import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UseSplashContext } from './context/UseSplashContext.tsx'
import UseAuthContext from './context/UseAuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UseSplashContext>
      <UseAuthContext>
        <App />
      </UseAuthContext>
    </UseSplashContext>
  </StrictMode>,
)
