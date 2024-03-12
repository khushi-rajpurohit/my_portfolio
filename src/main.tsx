import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import "@fortawesome/fontawesome-free/css/all.min.css"
import Portfolio from './portfolio.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portfolio />
   
  </React.StrictMode>,
)
