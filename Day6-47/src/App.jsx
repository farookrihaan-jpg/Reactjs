import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Task1Home";
import About from "./Task1About";
import Task1About from './Task1About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Task1Home />} />
          <Route path="/about" element={<Task1About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
