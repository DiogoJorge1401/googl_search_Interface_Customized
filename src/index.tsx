import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { App } from './App'
import { ResultContextProvider } from './context/ResultContextProvider'
import './global.css'

render(
  <React.StrictMode>
    <ResultContextProvider>
      <Router>
        <App />
      </Router>
    </ResultContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
