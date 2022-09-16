import React, { useEffect, useRef, useState } from 'react'
import { Bootloader } from '../../styles/Loaders'
import styles from './Boot.module.css'

const Boot = ({ booted }) => {
  const [visible, setVisible] = useState(false)

  const mainRef = useRef(null)

  useEffect(() => {
    const mainElem = mainRef.current

    if (!booted) return
    const handleAnimationEnd = (e) => {
      mainElem.style.display = "none"
    }

    mainElem.addEventListener("animationend", handleAnimationEnd)

    return () => {
      mainElem.removeEventListener("animationend", handleAnimationEnd)
    }
  }, [booted])

  useEffect(() => {
    let timeOut = setTimeout(() => {
      setVisible(true)
    }, 4000)

    return () => {
      clearTimeout(timeOut)
    }
    
  }, [])
  return (
    <div
      className={`${styles.container} ${booted && styles.hideBotting}`}
      ref={mainRef}
    >
      <div className={styles.text}>
        <span className={styles.main}>Os</span>
        <span className={styles.sub}>20</span>
      </div>
      <div className={`${styles.loading} ${visible && styles.visible}`}>
        <Bootloader />
      </div>
      <div className={`${styles.message} ${visible && styles.visible}`}>
        <span>Services are loading...</span>
      </div>
    </div>
  )
}

export default Boot