import React from 'react'
import styles from './Start.module.css'
import { ReactComponent as FilesIcon } from '../../assets/folder.svg'
import { ReactComponent as ChromeIcon } from '../../assets/chrome.svg'
import { ReactComponent as CodeIcon } from '../../assets/code.svg'
import { ReactComponent as CmdIcon } from '../../assets/cmd.svg'
import { ReactComponent as StoreIcon } from '../../assets/store.svg'
import { ReactComponent as PowerIcon } from '../../assets/power.svg'
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg'
import { IconButton } from '../../styles/Buttons'

const Start = ({ open }) => {
  return (
    <div className={`${styles.container} ${!open ? styles.hide : styles.view}`}>
      <div className={styles.wrapper}>
        <div className={styles.apps}>
          <div className={styles.search}>search</div>
          <div className={styles.allApps}>
            <div className={styles.appSingle}>
              <ChromeIcon />
              <span>Chrome</span>
            </div>
            <div className={styles.appSingle}>
              <CodeIcon />
              <span>Vs Code</span>
            </div>
            <div className={styles.appSingle}>
              <CmdIcon />
              <span>Cmd</span>
            </div>
            <div className={styles.appSingle}>
              <FilesIcon />
              <span>Explorer</span>
            </div>
            <div className={styles.appSingle}>
              <StoreIcon />
              <span>Store</span>
            </div>
            <div className={styles.appSingle}>
              <ChromeIcon />
              <span>Chrome</span>
            </div>
            <div className={styles.appSingle}>
              <CodeIcon />
              <span>Vs Code</span>
            </div>
            <div className={styles.appSingle}>
              <CmdIcon />
              <span>Cmd</span>
            </div>
            <div className={styles.appSingle}>
              <FilesIcon />
              <span>Explorer</span>
            </div>
            <div className={styles.appSingle}>
              <StoreIcon />
              <span>Store</span>
            </div>
          </div>
        </div>
        <div className={styles.recent}>
          <div className={styles.header}>Recent</div>
          <div className={styles.recentApps}>
          <div className={styles.appSingle}>
              <CodeIcon />
              <span>Vs Code</span>
            </div>
            <div className={styles.appSingle}>
              <CmdIcon />
              <span>Cmd</span>
            </div>
            <div className={styles.appSingle}>
              <FilesIcon />
              <span>Explorer</span>
            </div>
            <div className={styles.appSingle}>
              <StoreIcon />
              <span>Store</span>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <IconButton type='button' small>
            <PowerIcon />
          </IconButton>
          <IconButton type='button' small>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Start