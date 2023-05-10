import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    IconButton,
    Toolbar,
    Container,
    Box
} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';


export default function TweetForm({ open, onClose }) {


    return (

        <Dialog open={open} onClose={onClose} >


                    <IconButton edge='start'>
                        <CloseIcon onClick={onClose} />
                    </IconButton>
      

            <DialogContent sx={{ maxWidth: 'md' }}>
            

            </DialogContent>

        </Dialog>
    );
}