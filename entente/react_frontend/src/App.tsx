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
import LoginModal from './Components/LoginModal';

function App() {

  const [showTop, setShowTop] = useState(true);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const toggleTop = () => setShowTop(!showTop)
  const toggleLeft = () => setShowLeft(!showLeft)
  const toggleRight = () => setShowRight(!showRight)

  const changeDate = (d: Date): void => setSelectedDate(d);

  const closeLoginModal = () => setLoginModalVisible(false)
  const openLoginModal = () => setLoginModalVisible(true)

  return (
    <>
      <NavBar openLoginModal={openLoginModal} />
      <div className={"flex-container"}>
        { showTop && <HeaderPane selectedDate={selectedDate} changeDate={changeDate} /> }
        { showLeft && <LeftPane displayDate={selectedDate} changeDate={changeDate} /> }
        <CenterPane toggleTop={toggleTop} toggleLeft={toggleLeft} toggleRight={toggleRight}
                    showTop={showTop} showLeft={showLeft} showRight={showRight}
                    selectedDate={selectedDate} />
        { showRight && <RightPane selectedDate={selectedDate} /> }
      <FooterPane />
      </div>
      <FooterBar />
      <LoginModal visible={loginModalVisible} closeLoginModal={closeLoginModal} />
    </>
  )
}

export default App
