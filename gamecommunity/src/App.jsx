import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from '../src/components/header/header';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App
