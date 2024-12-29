import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar';
import HeaderPane from './Components/HeaderPane';
import LeftPane from './Components/LeftPane';
import CenterPane from './Components/CenterPane';
import RightPane from './Components/RightPane';
import FooterPane from './Components/FooterPane';
import FooterBar from './Components/FooterBar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className={"flex-container"}>
      <HeaderPane />
        <LeftPane />
        <CenterPane />
        <RightPane />
      <FooterPane />
      </div>
      <FooterBar />
    </>
  )
}

export default App
