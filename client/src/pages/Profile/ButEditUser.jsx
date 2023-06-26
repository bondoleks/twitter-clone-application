import React, { useState } from 'react';
import { Hidden, Button } from '@mui/material';
import ModalEditUser from '../../components/ModalEditUser/ModalEditUser';

export const ButEditUser = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            {/* Кнопка видима только при ширине экрана больше 1700px */}
            <Hidden lgDown>
                <Button variant="outlined" onClick={handleOpen} sx={{
                    position: 'absolute',
                    top: '300px',
                    left: '55%',
                    color: 'primary',
                    border: '1px solid primary',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontWeight: '600'
                }}>
                    Edit profile
                </Button>
                <ModalEditUser open={open} onClose={handleClose} />
            </Hidden>

            {/* Кнопка видима при ширине экрана между 1280px и 1700px */}
            <Hidden lgUp mdDown>
                <Button variant="outlined" onClick={handleOpen} sx={{
                    position: 'absolute',
                    top: '300px',
                    left: '63%',
                    color: 'primary',
                    border: '1px solid primary',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontWeight: '600'
                }}>
                    Edit profile
                </Button>
                <ModalEditUser open={open} onClose={handleClose} />
            </Hidden>

            {/* Кнопка видима при ширине экрана меньше 1280px */}
            <Hidden mdUp>
                <Button variant="outlined" onClick={handleOpen} sx={{
                    position: 'absolute',
                    top: '350px',
                    left: '70%',
                    color: 'primary',
                    border: '1px solid primary',
                    borderRadius: '50px',
                    textTransform: 'none',
                    fontWeight: '600'
                }}>
                    Edit profile
                </Button>
                <ModalEditUser open={open} onClose={handleClose} />
            </Hidden>
        </>
    );
};

export default ButEditUser;
