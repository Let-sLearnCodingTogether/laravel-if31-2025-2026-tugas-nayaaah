import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@css/style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-green-500'>
      CONTACTS
    </div>
  </StrictMode>,
)
