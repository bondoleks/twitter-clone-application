import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    IconButton,
    Box,
    useTheme,
} from "@mui/material";
import ContainerTweetForm from "./ContainerTweetForm";
import ToolbarTweetForm from "./ToolbarTweetForm";
import WestIcon from '@mui/icons-material/West';
import { useParams } from 'react-router-dom';
import ButSendTweet from "./ButSendTweet";


export default function TweetFormMobile({ open, onClose }) {
    const { id } = useParams()

    const theme = useTheme();

    const TweetFormStyles = {
        backgroundColor: theme.palette.background.default,
    };

    const [file, setFile] = useState([]);
    const [tweetText, setTweetText] = useState("");
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const closeModal = () => {
        setIsFormSubmitted(true);
        onClose();
    };

    return (

        <Dialog open={open} onClose={onClose} fullScreen={true} fullWidth >
            <Box style={TweetFormStyles} sx={{ height: '100vh' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '8px',
                    marginLeft: '24px',
                    marginRight: '48px',
                }}>
                    <Link to={`/home`}>
                        <IconButton >
                            <WestIcon onClick={onClose} color='gray' />
                        </IconButton>
                    </Link>

                    <ButSendTweet tweetText={tweetText} id={id} file={file} closeModal={closeModal} setFile={setFile} setTweetText={setTweetText}  />

                </Box>

                <DialogContent sx={{ maxWidth: 'md' }}>

                <ContainerTweetForm tweetText={tweetText} setTweetText={setTweetText} />

                    <Box sx={{
                        borderTop: "1px solid #e1e8ed",
                        width: "100%",
                        my: 2
                    }}></Box>

                    <ToolbarTweetForm file={file} setFile={setFile} setTweetText={setTweetText} />

                </DialogContent>

            </Box>
        </Dialog>
    );
}
