import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";
import { useTheme } from '@mui/material/styles';


export default function ModalEditBirthdate({ open, onClose, toggleContainers }) {

    const theme = useTheme();

    const ModalEditBirthdateStyles = {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.gray.main
    };

    const ModalEditBirthdateStylesInvert = {
        backgroundColor: theme.palette.gray.main,
        color: theme.palette.background.default,
    }

    return (

        <Dialog sx={{
            width: '30%',
            marginInline: '35%',
            '@media (max-width: 600px)': {
              width: '100%',
              marginInline: 0,
            },
          }}
            open={open}
            onClose={onClose} >
            <DialogTitle style={ModalEditBirthdateStyles} edge='start'>Edit date of birth?</DialogTitle>
            <DialogContent style={ModalEditBirthdateStyles} sx={{fontSize: '14px'}}>
                This can only be changed a few times. Make sure you enter the age of the person using the account.
            </DialogContent>
            <DialogActions style={ModalEditBirthdateStyles} sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Button onClick={toggleContainers} style={ModalEditBirthdateStylesInvert} sx={{
                    width: '90%',
                    margin: '4px',
                    border: '1px solid black',
                    height: '30px',
                    borderRadius: '20px',
                    textTransform: 'none',
                    fontWeight: '600',
                    '&:hover': { backgroundColor: 'gray' }
                }}>
                    Edit
                </Button>

                <Button onClick={onClose} style={ModalEditBirthdateStyles} sx={{
                    width: '90%',
                    margin: '4px',
                    border: '1px solid ',
                    height: '30px',
                    borderRadius: '20px',
                    textTransform: 'none',
                    fontWeight: '600'
                }}>
                    Cancel
                </Button>

            </DialogActions>
        </Dialog>
    );
}