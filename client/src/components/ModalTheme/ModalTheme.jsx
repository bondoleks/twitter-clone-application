
import React, { useState, useEffect, useContext } from 'react';

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    useTheme,
    useMediaQuery
} from '@mui/material';
import CustomizedSteppers from './StepperEl';
import CheckIcon from '@mui/icons-material/Check';
import { CustomThemeContext } from "../../context/CustomThemeContext";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';



export const ThemeDialog = ({ open, onClose, buttonColor, onColorChange }) => {

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const ModalThemeStyles = {

        backgroundColor: theme.palette.backgroundModal,
        color: theme.palette.text.primary
    };


    const { themeMode, setThemeMode } = useContext(CustomThemeContext);

    const [color, setColor] = useState(() => {
        // При первом рендере компонента пытаемся получить цвет из локального хранилища
        const storedColor = localStorage.getItem('selectedColor');
        return storedColor ? storedColor : buttonColor;
    });

    const [lightColor, setLightColor] = useState(() => {
        // При первом рендере компонента пытаемся получить светлый цвет из локального хранилища
        const storedLightColor = localStorage.getItem('selectedLightColor');
        return storedLightColor ? storedLightColor : '#7bbdff';
    });


    // При изменении color или lightColor сохраняем значения в локальное хранилище
    useEffect(() => {
        localStorage.setItem('selectedColor', color);
    }, [color]);

    useEffect(() => {
        localStorage.setItem('selectedLightColor', lightColor);
    }, [lightColor]);

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
        localStorage.setItem('buttonColor', selectedColor); // Сохранение в localStorage
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setActiveButton(selectedColor)
    };

    const handleClose = () => {
        setSelectedColor(color);
        onClose();
    };

    useEffect(() => {
        setActiveColor(color);
    }, []);


    const [activeBut, setActiveBut] = useState(null);

    const buttons = [
        {
            label: 'Default',
            color: '#000000',
            backgroundColor: '#ffffff',
            state: "light"
        },
        {
            label: 'Dim',
            color: '#ffffff',
            backgroundColor: '#2f2f2f',
            state: "dark"
        },
        {
            label: 'Lights out',
            color: '#ffffff',
            backgroundColor: '#000000',
            state: "black"
        },
    ];

    const handleButtonClick = (index) => {
        setActiveBut(index);
        setThemeMode(buttons[index].state);
        localStorage.setItem('activeButton', index); // Сохранение выбранной кнопки в localStorage
        localStorage.setItem('themeMode', buttons[index].state); // Сохранение выбранной темы в localStorage
    };

    useEffect(() => {
        const storedActiveButton = localStorage.getItem('activeButton');
        const storedThemeMode = localStorage.getItem('themeMode');
        if (storedActiveButton !== null) {

            setActiveBut(parseInt(storedActiveButton));
        }
        if (storedThemeMode !== null) {
            setThemeMode(storedThemeMode);
        }
    }, []);

    return (

        <Dialog open={open} onClose={onClose} fullScreen={isMobile} style={ModalThemeStyles}>

            <Box style={ModalThemeStyles}>
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

                        width: '100%',

                        backgroundColor: theme.palette.colorBox,
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
                        width: '100%',
                        backgroundColor: theme.palette.colorBox,
                        marginTop: '4px',
                        marginBottom: '4px',
                        paddingInline: '20px',
                        borderRadius: '12px'
                    }}>
                        {colors.map((c) => (
                            <Box
                                key={c}
                                style={{

                                    width: isMobile ? '20px' : '32px',
                                    height: isMobile ? '20px' : '32px',
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
                                            fontSize: isMobile ? '12px' : '22px'

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

                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'center',
                        width: '100%',
                        backgroundColor: theme.palette.colorBox,
                        marginTop: '4px',
                        marginBottom: '4px',
                        paddingInline: '20px',
                        borderRadius: '12px'
                    }}>

                        {buttons.map((button, index) => (
                            <Button
                                key={index}
                                disableRipple
                                sx={{
                                    width: '150px',
                                    margin: '12px',
                                    textTransform: 'none',
                                    color: button.color,
                                    backgroundColor: button.backgroundColor,
                                    textAlign: 'left',

                                    border: activeBut === index ? `2px solid ${color}` : 'none',
                                    '&:hover': {
                                        backgroundColor: button.backgroundColor,
                                    },
                                }}
                                onClick={() => handleButtonClick(index)}

                                startIcon={
                                    <div
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            backgroundColor:
                                                activeBut === index ? color : 'transparent',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {activeBut === index ? (
                                            <CheckIcon sx={{ color: '#fff', fontSize: '14px' }} />
                                        ) : (
                                            <RadioButtonUncheckedIcon sx={{width:'20px',
                                            height: '20px' }} />
                                        )}
                                    </div>
                                }
                            >

                                <Typography sx={{ margin: '8px',  fontWeight: '700' }}>
                                    {button.label}
                                </Typography>
                            </Button>
                        ))}

                    </Box>
                </DialogContent>


                <DialogActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={onClose} variant="contained" color="primary" sx={{ marginBottom: '20px', borderRadius: '50px', backgroundColor: color }}>
                        Done
                    </Button>

                </DialogActions>

            </Box>
        </Dialog>

    );
};

export default ThemeDialog;

