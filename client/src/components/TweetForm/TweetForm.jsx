import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    Button,
    IconButton,
    Box,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ContainerTweetForm from "./ContainerTweetForm";
import ToolbarTweetForm from "./ToolbarTweetForm";
import { useTheme } from '@mui/material/styles';


export default function TweetForm({ open, onClose }) {

    const theme = useTheme();

    const TweetFormStyles = {
        backgroundColor: theme.palette.background.default,
      };

    const [buttonColor, setButtonColor] = useState(null);

    useEffect(() => {
        const savedColor = localStorage.getItem('buttonColor');
        if (savedColor) {
            setButtonColor(savedColor);
        }
    }, []);

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
        handleCloseMenu();
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleColorChange = (color) => {
        setButtonColor(color);
        localStorage.setItem('buttonColor', color);
    };


    return (

        <Dialog open={open} onClose={onClose} >

            <IconButton sx={{ position: 'absolute', top: '0', left: '0' }}>
                <CloseIcon onClick={onClose} color='gray' />
            </IconButton>

            <DialogContent sx={{ maxWidth: 'md' }} style={TweetFormStyles}>

                <ContainerTweetForm />

                <Box sx={{
                    borderTop: "1px solid #e1e8ed",
                    width: "100%",
                    my: 2
                }}></Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                    <ToolbarTweetForm />

                    <Button variant="contained" size="small" sx={{
                        textTransform: 'none',
                        borderRadius: '20px',
                        height: '30px',
                        background: buttonColor
                    }}>
                        Tweet
                    </Button>

                </Box>

            </DialogContent>

        </Dialog>
    );
}












