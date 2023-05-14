import React from "react";
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

    return (
        <Toolbar sx={{ marginLeft: '-20px' }}>
            <IconButton>
                <BrokenImageOutlinedIcon sx={{ color: '#1DA1F2' }} />
            </IconButton>
            <IconButton>
                <GifBoxOutlinedIcon sx={{ color: '#1DA1F2' }} />
            </IconButton>
            <IconButton>
                <BallotOutlinedIcon sx={{ color: '#1DA1F2' }} />
            </IconButton>
            <IconButton>
                <SentimentSatisfiedOutlinedIcon sx={{ color: '#1DA1F2' }} />
            </IconButton>
            <IconButton>
                <WorkHistoryOutlinedIcon sx={{ color: '#1DA1F2' }} />
            </IconButton>
            <IconButton>
                <LocationOnOutlinedIcon sx={{ color: '#1DA1F2' }} />
            </IconButton>
        </Toolbar>
    );
}