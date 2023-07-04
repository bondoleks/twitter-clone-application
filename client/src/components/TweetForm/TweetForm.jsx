import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    IconButton,
    Box,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ContainerTweetForm from "./ContainerTweetForm";
import ToolbarTweetForm from "./ToolbarTweetForm";
import ButSendTweet from "./ButSendTweet";
import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

export default function TweetForm({ open, onClose, withId }) {
    const { id } = useParams();

    const theme = useTheme();

    const TweetFormStyles = {
        backgroundColor: theme.palette.background.default,
    };

    const [file, setFile] = useState([]);
    const [tweetText, setTweetText] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleOpenModal = () => {
        handleCloseMenu();
    };

    const handleCloseModal = () => {
        onClose();
    };

    const closeModal = () => {
        setIsFormSubmitted(true);
        onClose();
    };

    const handleColorChange = (color) => {
        setButtonColor(color);
        localStorage.setItem('buttonColor', color);
    };

    return (
        <Dialog open={open} onClose={onClose}>

            <IconButton sx={{ position: 'absolute', top: '0', left: '0' }}>
                <CloseIcon onClick={onClose} color='gray' />
            </IconButton>

            <DialogContent sx={{ maxWidth: 'md' }} style={TweetFormStyles}>

                <ContainerTweetForm tweetText={tweetText} setTweetText={setTweetText} />

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

                    <ToolbarTweetForm file={file} setFile={setFile} setTweetText={setTweetText} />

                    <ButSendTweet tweetText={tweetText} id={id} file={file} closeModal={closeModal} setFile={setFile} setTweetText={setTweetText}  />

                </Box>

            </DialogContent>

        </Dialog>
    );
}


