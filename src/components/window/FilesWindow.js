import React from 'react'
import s from './FilesWindow.module.css'
import { ReactComponent as ForwardIcon } from '../../assets/arrows/forward.svg'
import { ReactComponent as BackwardIcon } from '../../assets/arrows/back.svg'
import { ReactComponent as HomeIcon } from '../../assets/utils/home.svg'
import { ReactComponent as HomeFolderIcon } from '../../assets/window/folderhome.svg'
import { ReactComponent as UserFolderIcon } from '../../assets/window/folderuser.svg'
import { ReactComponent as DownloadFolderIcon } from '../../assets/window/folderdownload.svg'
import { ReactComponent as MusicFolderIcon } from '../../assets/window/foldermusic.svg'
import { ReactComponent as ImageFolderIcon } from '../../assets/window/folderimage.svg'
import { ReactComponent as VideoFolderIcon } from '../../assets/window/foldervideo.svg'
import { ReactComponent as TrashIcon } from '../../assets/window/trash.svg'
import { ReactComponent as DesktopIcon } from '../../assets/window/desktop.svg'
import { IconButton, ShortCut } from '../../styles/Buttons'

const FilesWindow = () => {
    return (
        <div className={s.container}>
            <ul className={s.topBar}>
                <li>File</li>
                <li>Edit</li>
                <li>View</li>
                <li>Go</li>
                <li>Help</li>
            </ul>
            <div className={s.addressBar}>
                <div className={s.addressIcons}>
                    <IconButton type='button' small>
                        <BackwardIcon />
                    </IconButton>
                    <IconButton type='button' small>
                        <ForwardIcon />
                    </IconButton>
                    <IconButton type='button' small>
                        <HomeIcon />
                    </IconButton>
                </div>
                <div className={s.addressWrap}>
                    <div className={s.address}>/Home</div>
                </div>
            </div>
            <section className={s.body}>
                <div className={s.sideNav} id="scrollStyled">
                    <ul className={s.sideNavItems}>
                        <li className={s.sideNavActive}>
                            <HomeFolderIcon />
                            <span>Home</span>
                        </li>
                        <li>
                            <DesktopIcon />
                            <span>Desktop</span>
                        </li>
                        <li>
                            <UserFolderIcon />
                            <span>User</span>
                        </li>
                        <li>
                            <DownloadFolderIcon />
                            <span>Downloads</span>
                        </li>
                        <li>
                            <MusicFolderIcon />
                            <span>Music</span>
                        </li>
                        <li>
                            <ImageFolderIcon />
                            <span>Images</span>
                        </li>
                        <li>
                            <VideoFolderIcon />
                            <span>Videos</span>
                        </li>
                        <li>
                            <TrashIcon />
                            <span>Trash</span>
                        </li>
                    </ul>
                </div>
                <div className={s.main} id="scrollStyled">

                    <ShortCut large>
                        <DesktopIcon />
                        <span>Desktop</span>
                    </ShortCut>
                    <ShortCut large>
                        <UserFolderIcon />
                        <span>User</span>
                    </ShortCut>
                    <ShortCut large>
                        <DownloadFolderIcon />
                        <span>Downloads</span>
                    </ShortCut>
                    <ShortCut large>
                        <MusicFolderIcon />
                        <span>Music</span>
                    </ShortCut>
                    <ShortCut large>
                        <ImageFolderIcon />
                        <span>Images</span>
                    </ShortCut>
                    <ShortCut large>
                        <VideoFolderIcon />
                        <span>Videos</span>
                    </ShortCut>
                    <ShortCut large>
                        <TrashIcon />
                        <span>Trash</span>
                    </ShortCut>
                </div>
            </section>
        </div>
    )
}

export default FilesWindow