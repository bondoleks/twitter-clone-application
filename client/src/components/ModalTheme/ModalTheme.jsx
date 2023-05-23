import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box
} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CustomizedSteppers from './StepperEl';
import CheckIcon from '@mui/icons-material/Check';



export const ThemeDialog = ({ open, onClose, buttonColor, onColorChange  }) => {

    const [color, setColor] = useState(buttonColor);
    const [lightColor, setLightColor] = useState('#7bbdff');
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeButton, setActiveButton] = useState(null);
    const [activeColor, setActiveColor] = useState(null);

    const colors = ['#0080ff', '#f5e33d', '#ff0984', '#8000ff', '#ff8040', '#04ac7e'];
    const lightColors = ['#aed7ff', '#ffff80', '#ffb0d8', '#d0a2ff', '#ffc1a4', '#86ffc2']

    const [selectedLightColor, setLightColors] = useState(`${lightColor}`)

    const handleColorChange = (selectedColor) => {
        const colorIndex = colors.indexOf(selectedColor);
        setColor(selectedColor);
        setLightColor(lightColors[colorIndex]);
        setActiveColor(selectedColor);
        onColorChange(selectedColor);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setActiveButton(selectedColor)
    };

    const handleClose = () => {
        setSelectedColor(color);
        onClose();
    };

    

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{ textAlign: 'center', fontWeight: '700' }}>Customize your view</DialogTitle>
            <DialogContent>
                <Typography sx={{ marginBottom: '24px', color: 'gray', fontSize: '14px', textAlign: 'center' }}>
                    These settings affect all the Twitter accounts on this browser.
                </Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>
                    Font size
                </Typography>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '90%',
                    backgroundColor: '#f9f9f9',
                    marginTop: '4px',
                    marginBottom: '4px',
                    paddingInline: '20px',
                    borderRadius: '12px'
                }}>
                    <Typography sx={{ fontSize: '10px' }}>Aa</Typography>
                    <CustomizedSteppers selectedColor={color} selectedLightColor={lightColor} />
                    <Typography sx={{ fontSize: '28px' }}>Aa</Typography>
                </Box>

                <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>
                    Color
                </Typography>

                <Box p={2} sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '90%',
                    backgroundColor: '#f9f9f9',
                    marginTop: '4px',
                    marginBottom: '4px',
                    paddingInline: '20px',
                    borderRadius: '12px'
                }}>
                    {colors.map((c) => (
                        <Box
                            key={c}
                            style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: c,
                                display: 'inline-block',
                                margin: '4px',
                                cursor: 'pointer',
                                position: 'relative',
                            }}
                            color={buttonColor}
                            onClick={() => handleColorChange(c)}
                        >
                            {activeColor === c && (
                                <CheckIcon
                                    style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#fff',
                                    }}
                                />
                            )}
                        </Box>
                    ))}
                </Box>

                <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>
                    Background
                </Typography>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '90%',
                    backgroundColor: '#f9f9f9',
                    marginTop: '4px',
                    marginBottom: '4px',
                    paddingInline: '20px',
                    borderRadius: '12px'
                }}>
                    <Button disableRipple sx={{
                        width: '150px', margin: '12px', textTransform: 'none', color: 'black', backgroundColor: 'white', border: `2px solid ${color}`, '&:hover': {
                            backgroundColor: 'white'
                        }
                    }}>
                        <RadioButtonUncheckedIcon sx={{ width: '20px', color: 'gray' }} />
                        <Typography sx={{ margin: '8px', fontSize: '14px', fontWeight: '700' }} >
                            Default
                        </Typography>
                    </Button>

                    <Button disableRipple sx={{
                        width: '150px', margin: '12px', textTransform: 'none', color: 'white', backgroundColor: '#2f2f2f', '&:hover': {
                            backgroundColor: '#2f2f2f'
                        }
                    }}>
                        <RadioButtonUncheckedIcon sx={{ width: '20px', marginRight: '8px', color: 'gray' }} />
                        <Typography sx={{ margin: '8px', fontSize: '14px', fontWeight: '700' }}>
                            Dim
                        </Typography>
                    </Button>

                    <Button disableRipple sx={{
                        width: '150px', margin: '12px', textTransform: 'none', color: 'white', backgroundColor: 'black', '&:hover': {
                            backgroundColor: 'black'
                        }
                    }}>
                        <RadioButtonUncheckedIcon sx={{ width: '20px', marginRight: '8px', color: 'gray' }} />
                        <Typography sx={{ margin: '8px', fontSize: '14px', fontWeight: '700' }}>
                            Lights out
                        </Typography>
                    </Button>
                </Box>
            </DialogContent>
            

            <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={onClose} variant="contained" color="primary" sx={{ marginBottom: '20px', borderRadius: '50px', backgroundColor: color }}>
                    Done
                </Button>

            </DialogActions>



        </Dialog>
    );
};

export default ThemeDialog;