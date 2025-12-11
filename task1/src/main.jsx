import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Student from './Student.jsx'
import Props from './Props.jsx'
import Message from './message.jsx'
import ButtonComponent from './ButtonComponent.jsx'
import Card from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Student/>
    <Props name="Rihaan" age={21}/>
    <Props name="Malini" age={19}/>
    <Message text="this text will be in dynamic value of message function"/>
    <ButtonComponent buttontext="Click Me"/>
    <Card name="Rihaan" contact="8610087062"/>
    <Card name="Malini" contact="9677636422"/>
  </StrictMode>
)
