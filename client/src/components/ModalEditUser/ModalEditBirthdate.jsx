import React from "react";
import { Dialog, DialogTitle, DialogContent, Button, IconButton, Toolbar, Container, Box, Typography } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';


export default function ModalEditBirthdate({ open, onClose }) {

    return (

        <Dialog open={open} onClose={onClose} >



            <DialogContent sx={{ maxWidth: 'md' }}>
                

            </DialogContent>

        </Dialog>
    );
}