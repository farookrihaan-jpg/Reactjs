import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Task1UseEffect from './Task1UseEffect.jsx'
import Task2LoadingComponent from './Task2LoadingComponent.jsx'
import Task3Counter from './Task3Counter.jsx'
import Task4 from '../Task4.jsx'
import Task5 from './Task5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Task1UseEffect/>
    <Task2LoadingComponent/>
    <Task3Counter/>
    <Task4/>
    <Task5/>
  </StrictMode>,
)
