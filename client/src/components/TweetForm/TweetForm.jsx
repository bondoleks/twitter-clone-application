import React from "react";
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


export default function TweetForm({ open, onClose }) {

    return (

        <Dialog open={open} onClose={onClose}>

            <IconButton sx={{ position: 'absolute', top: '0', left: '0' }}>
                <CloseIcon onClick={onClose} />
            </IconButton>

            <DialogContent sx={{ maxWidth: 'md' }}>

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
            
                    <Button variant="contained" color="primary" size="small" sx={{ textTransform: 'none', borderRadius: '20px', height: '30px' }}>
                        Tweet
                    </Button>

                </Box>

            </DialogContent>

        </Dialog>
    );
}