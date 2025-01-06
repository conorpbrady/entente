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

  const [showTop, setShowTop] = useState(true);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const [displayDate, setDisplayDate] = useState(new Date());

  const toggleTop = () => setShowTop(!showTop)
  const toggleLeft = () => setShowLeft(!showLeft)
  const toggleRight = () => setShowRight(!showRight)

  const changeDate = (d: Date): void => setDisplayDate(d);

  return (
    <>
      <NavBar />
      <div className={"flex-container"}>
        { showTop && <HeaderPane /> }
        { showLeft && <LeftPane displayDate={displayDate} changeDate={changeDate} /> }
        <CenterPane toggleTop={toggleTop} toggleLeft={toggleLeft} toggleRight={toggleRight}
                    showTop={showTop} showLeft={showLeft} showRight={showRight} />
        { showRight && <RightPane /> }
      <FooterPane />
      </div>
      <FooterBar />
    </>
  )
}

export default App
