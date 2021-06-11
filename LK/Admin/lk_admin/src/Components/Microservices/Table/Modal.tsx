import React, { FC, useContext, useEffect, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

import ModalForm from './ModalForm'

import StoreContext from './../../../Store/Context'
import {
    ITransitionsModal,
    IMSConfig,
} from './../../../Interfaces/MicroserviceInterfaces'

import { useModalStyles } from './../../../Styles/MicroserviceStyles'

const ModalWindow: FC<ITransitionsModal> = ({ isOpen, setIsOpen }) => {
    const { addMSConfig } = useContext(StoreContext)
    const classes = useModalStyles()

    const handleSaveAndClose = (value?: IMSConfig | undefined) => {
        setIsOpen(false)
        value && addMSConfig(value)
    }

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
                    <div className={classes.paper}>
                        <ModalForm onClose={handleSaveAndClose} />
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default ModalWindow
