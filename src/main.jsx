import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { LogicContextProvider } from './context.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <LogicContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </LogicContextProvider>
)
