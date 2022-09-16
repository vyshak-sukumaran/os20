import React, { useEffect, useState } from 'react'
import Home from './home/Home'
import LockScreen from './lockscreen/LockScreen'
import './Main.css'

const Main = ({ booted }) => {
  const [toggled, setToggled] = useState(false)
  const [showMain, setShowMain] = useState(false)

  useEffect(() => {
    if (!booted) return

    let timeOut = setTimeout(() => {
      setShowMain(true)
    }, 500)
    return () => {
      clearTimeout(timeOut)
    }
  }, [booted])
  return (
    <>
      {
        showMain &&
        <div className='Main'>
          <LockScreen toggled={toggled} setToggled={setToggled} />
          <Home toggled={toggled} setToggled={setToggled} />
        </div>
      }
    </>
  )
}

export default Main