import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";


export default function ModalEditBirthdate({ open, onClose, toggleContainers }) {

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
            <DialogTitle edge='start'>Edit date of birth?</DialogTitle>
            <DialogContent >
                This can only be changed a few times. Make sure you enter the age of the person using the account.
            </DialogContent>
            <DialogActions sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <Button onClick={toggleContainers} sx={{
                    width: '90%',
                    margin: '4px',
                    color: 'white',
                    backgroundColor: 'black',
                    border: '1px solid black',
                    height: '30px',
                    borderRadius: '20px',
                    textTransform: 'none',
                    fontWeight: '600',
                    '&:hover': { backgroundColor: 'gray' }
                }}>
                    Edit
                </Button>

                <Button onClick={onClose} sx={{
                    width: '90%',
                    margin: '4px',
                    color: 'black',
                    border: '1px solid black',
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