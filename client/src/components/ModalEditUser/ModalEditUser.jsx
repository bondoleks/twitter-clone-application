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
    Typography
} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Link from '@mui/material/Link';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import ModalEditBirthdate from "./ModalEditBirthdate";

export default function ModalEditUser({ open, onClose }) {

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

    const [openMod2, setOpenMod2] = useState(false);

    const handleOpenMod2 = () => {
        setOpenMod2(true);
    };

    const handleCloseMod2 = () => {
        setOpenMod2(false);
    };

    return (

        <Dialog open={open} onClose={onClose} >

            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Toolbar>
                    <IconButton edge='start'>
                        <CloseIcon onClick={onClose} />
                    </IconButton>
                    <DialogTitle>Edit profile</DialogTitle>
                </Toolbar>
                <Button sx={{
                    color: 'black',
                    border: '1px solid black',
                    height: '30px',
                    borderRadius: '20px',
                    textTransform: 'none',
                    fontWeight: '600'
                }}>
                    Save
                </Button>
            </Toolbar>

            <DialogContent sx={{ maxWidth: 'md' }}>
                <Container>
                    <div style={{ position: 'relative' }}>
                        <Box sx={{
                            bgcolor: 'grey.300',
                            width: '100%',
                            height: '150px'
                        }}></Box>

                        <IconButton sx={{
                            position: 'absolute',
                            top: '55px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            color: 'black '
                        }}>
                            <PhotoCameraOutlinedIcon />
                        </IconButton>
                    </div>

                    <div style={{ position: 'relative' }}>
                        <StyledAvatar
                            alt="User Avatar"
                            src='../../img/avatar.png'
                            sx={{
                                width: '20%',
                                height: '20%',
                                borderRadius: '50%',
                                marginTop: '-10%',
                                marginBottom: '10px',
                                marginLeft: '10px',
                                cursor: 'pointer'
                            }}
                        />

                        <IconButton sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '12%',
                            transform: 'translate(-50%, -50%)',
                            color: 'black'
                        }}>
                            <PhotoCameraOutlinedIcon />
                        </IconButton>
                    </div>
                </Container>

                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{
                    width: '100%',
                    marginBottom: '10px'
                }} />
                <TextareaAutosize id="outlined-basic" placeholder="Bio" variant="outlined" style={{
                    width: '99%',
                    height: '100px',
                    marginBottom: '10px',
                    border: '1px solid gray',
                    borderRadius: '4px'
                }} />
                <TextField id="outlined-basic" label="Location" variant="outlined" sx={{
                    width: '100%',
                    marginBottom: '10px'
                }} />
                <TextField id="outlined-basic" label="Website" variant="outlined" sx={{
                    width: '100%',
                    marginBottom: '10px'
                }} />

                <Typography sx={{
                    marginTop: '8px',
                    fontSize: '14px'
                }}>
                    Birth date
                    <FiberManualRecordSharpIcon sx={{
                        fontSize: '4px',
                        marginInline: '8px',
                        paddingBottom: '4px'
                    }} />
                    <Link onClick={handleOpenMod2} underline="hover" sx={{
                        textDecoration: 'none',
                        cursor: 'pointer'
                    }}>
                        Edit
                    </Link>
                    <ModalEditBirthdate open={openMod2} onClose={handleCloseMod2} />
                </Typography>

                <Typography>
                    Mounth Day, Year
                </Typography>

            </DialogContent>

        </Dialog>
    );
}