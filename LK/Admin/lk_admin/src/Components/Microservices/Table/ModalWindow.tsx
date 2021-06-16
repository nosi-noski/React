import React, { FC, useContext, useEffect, useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import {
    ITransitionsModal,
    IMSConfig,
} from './../../../Interfaces/MicroserviceInterfaces'

import { useModalStyles } from './../../../Styles/MicroserviceStyles'
export const ModalWindow: FC<ITransitionsModal> = ({
    isOpen,
    setIsOpen,
    children,
}) => {
    const classes = useModalStyles()

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={isOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={isOpen}>
                    <div className={classes.paper}>{children}</div>
                </Fade>
            </Modal>
        </div>
    )
}
