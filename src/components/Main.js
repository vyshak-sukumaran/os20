import React, { useState } from 'react'
import Home from './home/Home'
import LockScreen from './lockscreen/LockScreen'
import './Main.css'

const Main = () => {
  const [toggled, setToggled] = useState(false)
  return (
    <div className='Main'>
        {
          !toggled ?
          <LockScreen setToggled={setToggled} />
          :
          <Home />
        }
    </div>
  )
}

export default Main