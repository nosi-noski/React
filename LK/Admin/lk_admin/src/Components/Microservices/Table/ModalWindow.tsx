import React, { FC } from 'react'
import { Modal, Backdrop, Fade } from '@material-ui/core'
import { ITransitionsModal } from '../../../Interfaces/MicroserviceInterfaces'
import { useModalStyles } from '../../../Styles/MicroserviceStyles'

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
