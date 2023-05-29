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
import CustomizedSteppers from './StepperEl';
import CheckIcon from '@mui/icons-material/Check';
import { useTheme } from '@mui/material/styles';


export const ThemeDialog = ({ open, onClose, buttonColor, onColorChange }) => {

    const theme = useTheme();

    const ModalThemeStyles = {
        backgroundColor: theme.palette.background.default,
    };

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

    // const [color, setColor] = useState(buttonColor);
    // const [lightColor, setLightColor] = useState('#7bbdff');
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
        setButtonColor(selectedColor); // Добавлено обновление buttonColor
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
            color: 'black',
            backgroundColor: 'white',
        },
        {
            label: 'Dim',
            color: 'white',
            backgroundColor: '#2f2f2f',
        },
        {
            label: 'Lights out',
            color: 'white',
            backgroundColor: 'black',
        },
    ];

    const handleButtonClick = (index) => {
        setActiveBut(index);
    };

    return (
        <Dialog open={open} onClose={onClose}>
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
                        width: '90%',
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
                        width: '90%',
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
                                    border: activeBut === index ? `2px solid ${color}` : 'none',
                                    '&:hover': {
                                        backgroundColor: button.backgroundColor,
                                    },
                                }}
                                onClick={() => handleButtonClick(index)}
                            >
                                <div
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        borderRadius: '50%',
                                        backgroundColor: activeBut === index ? color : 'transparent',
                                        display: 'inline-block',
                                        marginRight: '8px',
                                    }}
                                >
                                    {activeBut === index && (
                                        <CheckIcon sx={{ color: '#fff', fontSize: '16px' }} />
                                    )}
                                </div>
                                <Typography sx={{ margin: '8px', fontSize: '14px', fontWeight: '700' }}>
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