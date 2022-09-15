import React, { useEffect, useState } from 'react'
import { Bootloader } from '../../styles/Loaders'
import styles from './Boot.module.css'

const Boot = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, 4000)
  }, [])
  return (
    <div className={styles.container}>
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