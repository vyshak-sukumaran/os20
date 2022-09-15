import React, { useState } from 'react'
import { ShortCut } from '../../styles/Buttons'
import FilesWindow from '../window/FilesWindow'
import Window from '../window/Window'

const ShortcutSingle = ({ box, draggable, onDragStart, onDragOver, onDrop }) => {
    const [open, setOpen] = useState(false)
    const handleOpen = e => {
        e.preventDefault()
        setOpen(true)
    }
    const handleClose = e => {
        setOpen(false)
    }
    return (
        <>
            <ShortCut
                draggable={draggable}
                onDragStart={onDragStart({ id: box.id })}
                onDragOver={onDragOver({ id: box.id })}
                onDrop={onDrop({ id: box.id })}
                onDoubleClick={handleOpen}
            >
                {box.icon}
                <span>{box.name}</span>
            </ShortCut>
            <Window
                isOpen={open}
                handleClose={handleClose}
                name={box.name}
                icon={box.icon}
            >
                <FilesWindow />
            </Window>
        </>
    )
}

export default ShortcutSingle