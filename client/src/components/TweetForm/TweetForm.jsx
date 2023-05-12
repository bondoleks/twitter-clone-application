import React, { useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    IconButton,
    Toolbar,
    Container,
    Box,
    Select,
    Menu,
    MenuItem,
} from "@mui/material";
import { TextareaAutosize } from "@mui/material";
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export default function TweetForm({ open, onClose }) {

    const StyledAvatar = styled(Avatar)(({ theme }) => ({
        position: 'relative',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
        }
    }));

    const [selectedValue, setSelectedValue] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (value) => {
        setSelectedValue(value);
        setAnchorEl(null);
    };


    return (

        <Dialog open={open} onClose={onClose} >

            <IconButton sx={{ position: 'absolute', top: '0', left: '0' }}>
                <CloseIcon onClick={onClose} />
            </IconButton>


            <Container sx={{ display: 'flex', marginTop: '50px' }}>

                <StyledAvatar alt="User Avatar"
                    src='../../img/avatar.png' />

                <Button onClick={handleButtonClick} startIcon={<ArrowDropDownIcon />}
                    sx={{
                        height: '20px',
                        marginLeft: '10px',
                        textTransform: 'none',
                        border: '1px solid black',
                        borderRadius: '20px'
                    }} >
                    {selectedValue || "Everyone"}
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => handleMenuClose(selectedValue)}>
                    <MenuItem onClick={() => handleMenuClose("Everyone")} >Everyone</MenuItem >
                    <MenuItem onClick={() => handleMenuClose("Twitter Circle")}>Twitter Circle</MenuItem>
                </Menu>

            </Container>


            <TextareaAutosize placeholder="What's happening?"  style={{
                    width: '300px',
                    height: '100px',
                    marginBottom: '10px',
                    border: '1px solid transparent',
                    marginLeft: '70px', 
                    outline: 'none',
                    resize: 'none'
                 }
                } />



            <DialogContent sx={{ maxWidth: 'md' }}>


            </DialogContent>

        </Dialog>
    );
}