import React, { useState } from 'react'
import styles from './Shortcuts.module.css'
import { ReactComponent as HomeFolderIcon } from '../../assets/folderhome.svg'
import { ReactComponent as TrashIcon } from '../../assets/trash.svg'
import { ReactComponent as ImageIcon } from '../../assets/image.svg'
import ShortcutSingle from './ShortcutSingle'

const props = [
    { id: 1, name: 'Home', icon: <HomeFolderIcon /> },
    { id: 2, name: 'Trash', icon: <TrashIcon /> },
    { id: 3, name: 'Nature.png', icon: <ImageIcon /> }
];

const Shortcuts = () => {
    const [boxes, setBoxes] = useState(props)

    const handleDragStart = data => event => {
        let fromBox = JSON.stringify({ id: data.id })
        event.dataTransfer.setData('dragContent', fromBox)
    }
    const handleDragOver = () => event => {
        event.preventDefault()
        return false
    }

    const swapBoxes = (fromBox, toBox, boxes, setBoxes) => {
        let bx = [...boxes]
        let fromIndex = -1
        let toIndex = -1

        bx.forEach((box, index) => {
            if (box.id === fromBox.id) {
                fromIndex = index
            }
            if (box.id === toBox.id) {
                toIndex = index
            }
        })

        if (fromIndex !== -1 && toIndex !== -1) {
            let fromRest = bx[fromIndex]
            let toRest = bx[toIndex]

            bx[toIndex] = { id: toBox.id, ...fromRest }
            bx[fromIndex] = { id: fromBox.id, ...toRest }
            // magic happens here
            setBoxes(bx)
        }
    }
    const handleDrop = (data, boxes, setBoxes) => event => {
        event.preventDefault()
        let fromBox = JSON.parse(event.dataTransfer.getData('dragContent'))
        let toBox = { id: data.id }

        swapBoxes(fromBox, toBox, boxes, setBoxes)
        return false
    }

    return (
        <div className={styles.container}>
            <div className={styles.shortcuts}>
                {
                    boxes.map(box => (
                        <ShortcutSingle
                            key={box.id}
                            box={box}
                            draggable={true}
                            onDragStart={handleDragStart}
                            onDragOver={handleDragOver}
                            onDrop={data => handleDrop(data, boxes, setBoxes)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Shortcuts