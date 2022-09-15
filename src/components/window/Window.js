import React, { useRef, useEffect } from "react";
import { IconButton } from "../../styles/Buttons";
import styles from "./Window.module.css";
import { ReactComponent as CloseIcon } from '../../assets/utils/close.svg'
import { ReactComponent as UpArrowIcon } from '../../assets/arrows/upward.svg'
import { ReactComponent as DownArrowIcon } from '../../assets/arrows/downward.svg'

const Window = ({ children, isOpen, handleClose, name, icon }) => {
    const modalRef = useRef(null)
    const closeRef = useRef(null)

    useEffect(() => {
        let modal = modalRef.current
        let close = closeRef.current
        if (isOpen) {
            modal.show()
        }
        close.addEventListener("click", () => {
            modal.setAttribute("closing", "")

            modal.addEventListener("animationend", () => {
                modal.removeAttribute("closing")
                modal.close()
            }, { once: true })
        })

        return () => {
            close.removeEventListener("click", () => {
                modal.setAttribute("closing", "")

                modal.removeEventListener("animationend", () => {
                    modal.removeAttribute("closing")
                    modal.close()
                }, { once: true })
            })
        }

    }, [isOpen])

    useEffect(() => {
        let elem = modalRef.current
        let posX = 0
        let posY = 0

        const handleMouseDown = (e) => {
            posX = e.clientX
            posY = e.clientY

            if (e.target.id !== "top") return

            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        }
        const handleMouseMove = (e) => {
            let dx = e.clientX - posX
            let dy = e.clientY - posY

            elem.style.top = `${elem.offsetTop + dy}px`
            elem.style.left = `${elem.offsetLeft + dx}px`

            posX = e.clientX
            posY = e.clientY
        }
        const handleMouseUp = (e) => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }

        const handleClick = e => {
            let topBar = elem.querySelector("#top")
            elem.style.zIndex = "500"
            if (e.target === elem || e.target === topBar) {
                elem.style.zIndex = "999"
            }
        }

        elem.addEventListener("mousedown", handleMouseDown)
        document.addEventListener("click", handleClick)

        return () => {
            elem.removeEventListener("mousedown", handleMouseDown)
            document.removeEventListener("click", handleClick)
        }
    }, [])
    return (
        <dialog ref={modalRef} className={styles.window} id="modal">
            <div className={styles.topBar} id="top">
                <div className={styles.windowName}>{icon}&nbsp;<span>{name}</span></div>
                <div className={styles.windowButtons}>
                    <IconButton small type="button">
                        <DownArrowIcon />
                    </IconButton>
                    <IconButton small type="button">
                        <UpArrowIcon />
                    </IconButton>
                    <IconButton ref={closeRef} small type="button" onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </div>
            </div>
            {children}
        </dialog>
    )
}

export default Window