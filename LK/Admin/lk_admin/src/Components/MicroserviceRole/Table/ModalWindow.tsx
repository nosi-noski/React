import React, { FC, useContext, useEffect, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { observer } from 'mobx-react'
import ModalForm from './ModalForm'

import StoreContext from './../../../Store/Context'
import {
    ITransitionsModal,
    IMSConfigRole,
} from './../../../Interfaces/MicroserviceInterfaces'

import { useModalStyles } from './../../../Styles/MicroserviceStyles'

const ModalWindow: FC<ITransitionsModal> = ({
    roleId,
    roleName,
    roleTitle,
    isOpen,
    setIsOpen,
}) => {
    const { MSConfigs, addRole } = useContext(StoreContext)
    const classes = useModalStyles()

    const handleSaveAndClose = (
        value?: IMSConfigRole | undefined,
        configs?: number[] | undefined
    ) => {
        setIsOpen(false)

        addRole(value, configs)
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
                        <ModalForm
                            roleId={roleId}
                            roleName={roleName}
                            roleTitle={roleTitle}
                            onClose={handleSaveAndClose}
                        />
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}

export default observer(ModalWindow)
