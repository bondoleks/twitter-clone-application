import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";
import ButEditBirthdate from "./ButEditBirthday";


export default function ModalEditBirthdate({ open, onClose, toggleContainers }) {

    return (

        <Dialog sx={{ width: '30%', marginInline: '35%' }}
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

                <ButEditBirthdate toggleContainers={toggleContainers} />

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