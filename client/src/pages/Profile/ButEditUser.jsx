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
            <Hidden mdDown>
                <Button variant="outlined" onClick={handleOpen} sx={{
                    position: 'absolute',
                    top: '300px',
                    left: '56%',
                    color: 'primary',
                    border: '1px solid primary',
                    borderRadius: '50px',
                    textTransform: 'none', fontWeight: '600'
                }}>
                    Edit profile
                </Button>
                <ModalEditUser open={open} onClose={handleClose} />
            </Hidden>

            <Hidden mdUp smDown>
                <Button variant="outlined" onClick={handleOpen} sx={{ position: 'absolute', 
                top: '300px', 
                left: '70%', 
                color: 'primary', 
                border: '1px solid primary', 
                borderRadius: '50px', 
                textTransform: 'none', 
                fontWeight: '600' }}>
                    Edit profile
                </Button>
                <ModalEditUser open={open} onClose={handleClose} />
            </Hidden>

            <Hidden smUp>
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
    )
}

export default ButEditUser