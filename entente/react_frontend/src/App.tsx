import { useState, useEffect } from 'react'
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
import { authenticate, getUser, logout } from './api/authService'
import { useGetHabitData } from './hooks/useGetHabitData'

function App() {

  const [showTop, setShowTop] = useState(true);
  const [showLeft, setShowLeft] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  const m = selectedDate.getMonth() + 1
  const y = selectedDate.getFullYear()
  const { habitData } = useGetHabitData(m, y);



  const toggleTop = () => setShowTop(!showTop)
  const toggleLeft = () => setShowLeft(!showLeft)
  const toggleRight = () => setShowRight(!showRight)

  const changeDate = (d: Date): void => setSelectedDate(d);

  const closeLoginModal = () => setLoginModalVisible(false)
  const openLoginModal = () => setLoginModalVisible(true)


  useEffect(() => {
    authenticate().then((isAuthenticated) => {
      const user = getUser()
      setIsAuthenticated(isAuthenticated)
      setUser(user)
    })
  }, [])

  return (
    <>
      <NavBar isAuthenticated={isAuthenticated} user={user} logout={logout} openLoginModal={openLoginModal} />
      {isAuthenticated ? (
      <div className={"flex-container"}>
        { showTop && <HeaderPane selectedDate={selectedDate} changeDate={changeDate} /> }
        { showLeft && <LeftPane displayDate={selectedDate} changeDate={changeDate} /> }
        <CenterPane toggleTop={toggleTop} toggleLeft={toggleLeft} toggleRight={toggleRight}
                    showTop={showTop} showLeft={showLeft} showRight={showRight}
                    selectedDate={selectedDate} />
        { showRight && <RightPane selectedDate={selectedDate} /> }
      <FooterPane />
      </div> ) :
        ( <div className={"landing-page"}>
          <p>Entente is a customizable journal / calendar / planner where you can view everything going on in your life at a glance.</p>
          <p> Try it out! </p>
          <p> Add some screenshots and make it sexy </p>
          </div>
        )
      }
      <FooterBar />
      <LoginModal visible={loginModalVisible} closeLoginModal={closeLoginModal} />

    </>
  )
}

export default App
