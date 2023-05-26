import React, { useState, useEffect } from "react";
import {
    IconButton,
    Toolbar,
} from "@mui/material";
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


export default function ToolbarTweetForm() {

    const [buttonColor, setButtonColor] = useState();

    useEffect(() => {
        const savedColor = localStorage.getItem('buttonColor');
        if (savedColor) {
            setButtonColor(savedColor);
        }
    }, []);



    return (
        <Toolbar sx={{ marginLeft: '-20px' }}>
            <IconButton>
                <BrokenImageOutlinedIcon sx={{ color: buttonColor }} />
            </IconButton>
            <IconButton>
                <GifBoxOutlinedIcon sx={{ color: buttonColor }} />
            </IconButton>
            <IconButton>
                <BallotOutlinedIcon sx={{ color: buttonColor }} />
            </IconButton>
            <IconButton>
                <SentimentSatisfiedOutlinedIcon sx={{ color: buttonColor }} />
            </IconButton>
            <IconButton>
                <WorkHistoryOutlinedIcon sx={{ color: buttonColor }} />
            </IconButton>
            <IconButton>
                <LocationOnOutlinedIcon sx={{ color: buttonColor }} />
            </IconButton>
        </Toolbar>
    );
}