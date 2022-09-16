import React, { useRef, useEffect } from 'react'
import styles from './Start.module.css'
import { ReactComponent as FilesIcon } from '../../assets/window/folder.svg'
import { ReactComponent as ChromeIcon } from '../../assets/apps/chrome.svg'
import { ReactComponent as CodeIcon } from '../../assets/apps/code.svg'
import { ReactComponent as CmdIcon } from '../../assets/apps/cmd.svg'
import { ReactComponent as StoreIcon } from '../../assets/apps/store.svg'
import { ReactComponent as PowerIcon } from '../../assets/utils/power.svg'
import { ReactComponent as SettingsIcon } from '../../assets/utils/settings.svg'
import { ReactComponent as AEIcon } from '../../assets/apps/ae.svg'
import { ReactComponent as BraveIcon } from '../../assets/apps/brave.svg'
import { ReactComponent as DriveIcon } from '../../assets/apps/drive.svg'
import { ReactComponent as SteamIcon } from '../../assets/apps/steam.svg'
import { ReactComponent as TeamsIcon } from '../../assets/apps/teams.svg'
import { ReactComponent as XDIcon } from '../../assets/apps/xd.svg'
import { ReactComponent as CharmIcon } from '../../assets/apps/charm.svg'
import { IconButton } from '../../styles/Buttons'

const Start = ({ open, setOpen, setToggled, setShowMain }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const modal = modalRef.current

    if (!modal) return

    if (open) {
      modal.show()
    }

    const handleClick = (e) => {
      if (!open || e.target.closest("#startButton")) return
      if (!e.target.closest("#start")) {
        // console.log(e.target.closest("#startButton"));
        modal.setAttribute("closing", "")
        modal.addEventListener("animationend", handleCloseModal)
      }
    }
    const handleCloseModal = (e) => {
      modal.close()
      setOpen(false)
      modal.removeAttribute("closing")
      modal.removeEventListener("animationend", handleCloseModal)
    }

    document.addEventListener("click", handleClick, false)
    return () => {
      document.removeEventListener("click", handleClick, false)
    }

  }, [open, setOpen])
  return (
    <dialog ref={modalRef} className={styles.start} id="start">
      <div className={styles.wrapper}>
        <div className={styles.apps}>
          <div className={styles.search}>search</div>
          <div className={styles.allApps}>
            <div className={styles.appSingle}>
              <AEIcon />
              <span>AE</span>
            </div>
            <div className={styles.appSingle}>
              <BraveIcon />
              <span>Brave</span>
            </div>
            <div className={styles.appSingle}>
              <ChromeIcon />
              <span>Chrome</span>
            </div>
            <div className={styles.appSingle}>
              <DriveIcon />
              <span>Drive</span>
            </div>
            <div className={styles.appSingle}>
              <CharmIcon />
              <span>Pycharm</span>
            </div>
            <div className={styles.appSingle}>
              <CmdIcon />
              <span>Shell</span>
            </div>
            <div className={styles.appSingle}>
              <SteamIcon />
              <span>Steam</span>
            </div>
            <div className={styles.appSingle}>
              <TeamsIcon />
              <span>Teams</span>
            </div>
            <div className={styles.appSingle}>
              <CodeIcon />
              <span>VS Code</span>
            </div>
            <div className={styles.appSingle}>
              <XDIcon />
              <span>XD</span>
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
              <span>Shell</span>
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
          <IconButton
            onClick={(e) => {
              setToggled(false)
              setShowMain(false)
            }}
            type='button'
            small
          >
            <PowerIcon />
          </IconButton>
          <IconButton type='button' small>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
    </dialog>
  )
}

export default Start