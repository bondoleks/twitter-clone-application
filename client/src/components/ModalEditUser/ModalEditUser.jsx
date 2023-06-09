import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Button,
    IconButton,
    Toolbar,
    Container,
    Box
} from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import ContainerBirthday from "./ContainerBirthday";
import { useTheme } from '@mui/material/styles';

export default function ModalEditUser({ open, onClose }) {

    const theme = useTheme();

    const ModalEditUserStyles = {
        backgroundColor: theme.palette.background.default
    };

    const StyledAvatar = styled(Avatar)(() => ({
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


    const styles = {
        textarea: {
            width: '100%',
            height: '100px',
            marginBottom: '10px',
            border: '1px solid gray',
            borderRadius: '4px',
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.default,
            fontSize: '16px',
            padding: '12px',
            fontFamily: 'Roboto, sans-serif',
            color: theme.palette.text.primary   
        }
    };

    return (

        <Dialog open={open} onClose={onClose} >

            <Toolbar style={ModalEditUserStyles} sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Toolbar>
                    <IconButton edge='start'>
                        <CloseIcon onClick={onClose} color='gray' />
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

            <DialogContent sx={{ maxWidth: 'md' }} style={ModalEditUserStyles}>
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
                    marginBottom: '10px',
                    '& .MuiInputBase-input': {
                        color: theme.palette.text.primary,
                    },
                    '& .MuiOutlinedInput-root': {
                        borderColor: theme.palette.text.primary,
                    },
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.primary,
                    },
                    '& .MuiInputLabel-root': {
                        color: theme.palette.text.primary,
                    },
                }} />

                <TextareaAutosize
                     id="outlined-basic"
                     placeholder="Bio"
                     variant="outlined"
                     style={styles.textarea}
                     inputProps={{ style: { color: theme.palette.text.primary } }}
                     sx={{
                       '& .MuiOutlinedInput-root': {
                         borderColor: theme.palette.text.primary,
                       },
                       '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                         borderColor: theme.palette.text.primary,
                       },
                       '& .MuiInputLabel-root': {
                         color: theme.palette.text.primary,
                       },
                     }}
                />

                <TextField id="outlined-basic"
                    label="Location"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        marginBottom: '10px',
                        '& .MuiInputBase-input': {
                            color: theme.palette.text.primary,
                        },
                        '& .MuiOutlinedInput-root': {
                            borderColor: theme.palette.text.primary,
                        },
                        '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                            borderColor: theme.palette.text.primary,
                        },
                        '& .MuiInputLabel-root': {
                            color: theme.palette.text.primary,
                        },
                    }} />

                <TextField id="outlined-basic" label="Website" variant="outlined" sx={{
                    width: '100%',
                    marginBottom: '10px',
                    '& .MuiInputBase-input': {
                        color: theme.palette.text.primary,
                    },
                    '& .MuiOutlinedInput-root': {
                        borderColor: theme.palette.text.primary,
                    },
                    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                        borderColor: theme.palette.text.primary,
                    },
                    '& .MuiInputLabel-root': {
                        color: theme.palette.text.primary,
                    },
                }} />

                <ContainerBirthday />

            </DialogContent>

        </Dialog>
    );
}
