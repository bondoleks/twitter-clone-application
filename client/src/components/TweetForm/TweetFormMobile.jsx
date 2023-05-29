import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
    Dialog,
    DialogContent,
    Button,
    IconButton,
    Box,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import ContainerTweetForm from "./ContainerTweetForm";
import ToolbarTweetForm from "./ToolbarTweetForm";
import WestIcon from '@mui/icons-material/West';
import { height } from "@mui/system";


export default function TweetFormMobile({ open, onClose }) {

    const theme = useTheme();

    const TweetFormStyles = {
        backgroundColor: theme.palette.background.default,
        // Add other styles as needed
    };
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [buttonColor, setButtonColor] = useState();

    useEffect(() => {
        const savedColor = localStorage.getItem('buttonColor');
        if (savedColor) {
            setButtonColor(savedColor);
        }
    }, []);


    return (

        <Dialog open={open} onClose={onClose} fullScreen={fullScreen} >
            <Box style={TweetFormStyles} sx={{height: '100vh'}}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: '8px',
                    marginInline: '12px'
                }}>
                    <Link to={`/home`}>
                        <IconButton >
                            <WestIcon onClick={onClose} color='gray'/>
                        </IconButton>
                    </Link>

                    <Button variant="contained" color="primary" size="small" sx={{
                        textTransform: 'none',
                        borderRadius: '20px',
                        height: '30px',
                        backgroundColor: buttonColor
                    }}>
                        Tweet
                    </Button>
                </Box>

                <DialogContent sx={{ maxWidth: 'md' }}>

                    <ContainerTweetForm />

                    <Box sx={{
                        borderTop: "1px solid #e1e8ed",
                        width: "100%",
                        my: 2
                    }}></Box>

                    <ToolbarTweetForm />

                </DialogContent>

            </Box>
        </Dialog>
    );
}