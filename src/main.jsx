import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom'
=======
import { BrowserRouter } from 'react-router-dom'
>>>>>>> 12b7c70adca6dc55ace970fc159bf65192f1b36a

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <App />
=======
    <App />
>>>>>>> 12b7c70adca6dc55ace970fc159bf65192f1b36a
    </BrowserRouter>
  </StrictMode>,
)
