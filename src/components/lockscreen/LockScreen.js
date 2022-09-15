import React, { useEffect, useRef, useState } from 'react'
import styles from './LockScreen.module.css'
import Background from '../../assets/lockpaper.jpg'
import Avatar from '../../assets/lockbg.png'
import { ReactComponent as LockIcon } from '../../assets/lock.svg'
import { ReactComponent as KeyboardIcon } from '../../assets/keyboard.svg'
import { ReactComponent as WifiIcon } from '../../assets/wifi.svg'
import { ReactComponent as BatteryIcon } from '../../assets/battery.svg'
import { ReactComponent as ArrowIcon } from '../../assets/arrowdown.svg'
import { ReactComponent as BackIcon } from '../../assets/back.svg'
import { GradientButton, IconButton } from '../../styles/Buttons'

const LockScreen = ({setToggled}) => {
  const lockRef = useRef(null)
  let [pressed, setPressed] = useState(true)
  let [start, setStart] = useState(0)
  let [end, setEnd] = useState(0)

  const handleLogin = (e) => {
    console.log("xlslgllkeghnleit");
    setToggled(true)
  }

  const handleGoBack = (e) => {
    console.log("go back");
    setStart(0)
    setEnd(0)
  }

  console.log(start, end);
  useEffect(() => {
    const elmt = lockRef.current
    if (!elmt) return

    const mouseDown = (event) => {
      setPressed(true)
      elmt.style.cursor = "grabbing"
      setStart(event.clientY)
    }

    const mouseUp = (event) => {
      if (!pressed) return
      elmt.style.cursor = "default"
      setPressed(false)
      setEnd(event.clientY)
      console.log(event);
    }

    elmt.addEventListener("mouseenter", () => {
      elmt.style.cursor = "default"
    })
    elmt.addEventListener("mousedown", mouseDown)
    elmt.addEventListener("mouseup", mouseUp)
    return () => {
      elmt.removeEventListener("mouseenter", () => {
        elmt.style.cursor = "auto"
      })
      elmt.removeEventListener("mousedown", mouseDown)
      elmt.removeEventListener("mouseup", mouseUp)
    }
  }, [])
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}

    >
      <div className={`${styles.timeWrapper} ${start - end >= 50 && styles.hideTimeWrapper}`} ref={lockRef}>
        <div className={styles.topWrap}>
          <div className={styles.lockIcon}>
            <LockIcon />
          </div>
          <div className={styles.lockTime}>12:00</div>
          <div className={styles.lockDate}>Monday, August 14th</div>
        </div>

        <div className={styles.middleWrap}>
          <div className={styles.middleText}>Slide up</div>
          <div className={styles.middleArrows}>
            <div className={`${styles.middleArrow} ${styles.middleArrowOne}`}><ArrowIcon /></div>
            <div className={`${styles.middleArrow} ${styles.middleArrowTwo}`}><ArrowIcon /></div>
          </div>
        </div>

        <div className={styles.bottomWrap}>
          <div className={styles.bottomIcons}>
            <KeyboardIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>
      </div>

      <div className={`${styles.login} ${start - end >= 50 && styles.showLogin}`}>
        <div className={styles.backArrow}>
          <IconButton 
          type='button'
          onClick={handleGoBack}
          >
            <BackIcon />
          </IconButton>

        </div>
        <div className={styles.loginWrapper}>
          <div
            className={styles.loginAvatar}
            style={{
              backgroundImage: `url(${Avatar})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          >hi
          </div>
          <div className={styles.loginText}>Welcome back Erik!</div>
          <div className={styles.loginButton}>
            <GradientButton
              type='button'
              onClick={handleLogin}
            >
              LogIn
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LockScreen