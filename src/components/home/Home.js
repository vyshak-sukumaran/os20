import React, { useState } from 'react'
import styles from './Home.module.css'
import { ReactComponent as StartIcon } from '../../assets/utils/start.svg'
import { ReactComponent as FilesIcon } from '../../assets/window/folder.svg'
import { ReactComponent as ChromeIcon } from '../../assets/apps/chrome.svg'
import { ReactComponent as CodeIcon } from '../../assets/apps/code.svg'
import { ReactComponent as CmdIcon } from '../../assets/apps/cmd.svg'
import { ReactComponent as StoreIcon } from '../../assets/apps/store.svg'
import { ReactComponent as WifiIcon } from '../../assets/utils/wifi.svg'
import { ReactComponent as MutedIcon } from '../../assets/utils/muted.svg'
import { ReactComponent as KeyboardIcon } from '../../assets/utils/keyboard.svg'
import Start from './Start'
import Shortcuts from './Shortcuts'

const Home = () => {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(/homebg.png)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}

    >
      <Shortcuts />

      <div className={styles.dock}>
        <div className={`${styles.dockSingle} ${styles.apps}`}>
          <div
            className={styles.iconSingle}
            onClick={(e) => {
              setOpen(!open)
            }}
          >
            <StartIcon />
          </div>
          <div className={styles.iconSingle}><FilesIcon /></div>
          <div className={styles.iconSingle}><ChromeIcon /></div>
          <div className={styles.iconSingle}><CodeIcon /></div>
          <div className={styles.iconSingle}><CmdIcon /></div>
          <div className={styles.iconSingle}><StoreIcon /></div>
        </div>
        <div className={`${styles.dockSingle} ${styles.utils}`}>
          <div className={styles.iconSingle}><KeyboardIcon /></div>
          <div className={styles.iconSingle}><WifiIcon /></div>
          <div className={styles.iconSingle}><MutedIcon /></div>
        </div>
        <div className={`${styles.dockSingle} ${styles.info}`}>
          <div className={styles.infoDate}>Aug 14th</div>
          <div className={styles.infoTime}>12:00</div>
          <div className={styles.infoAvatar}></div>

        </div>
      </div>

      <Start open={open} />

    </div>
  )
}

export default Home