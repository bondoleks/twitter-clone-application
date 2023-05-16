import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Tooltip
} from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { styled } from '@mui/material/styles';


export const ThemeDialog = ({ open, onClose }) => {

    const HorizontalStepper = styled(Stepper)(({ theme }) => ({
        background: 'transparent',
        padding: '10px 0',
        margin: '20px 0',
        '& .MuiStepLabel-root': {
            '&:hover': {
                cursor: 'pointer',
            },
        },
    }));

    const handleFontChange = (event, value) => {
        // handle font size change
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle sx={{ textAlign: 'center', fontWeight: '700' }}>Customize your view</DialogTitle>
            <DialogContent>
                <Typography sx={{ color: 'gray', fontSize: '14px' }}>
                    These settings affect all the Twitter accounts on this browser.
                </Typography>
                <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>
                    Font size
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '10px' }}>Aa</Typography>
                    <HorizontalStepper
                        activeStep={0} // Установите начальное значение для степпера
                        alternativeLabel
                        onClick={handleFontChange} // Обработка изменения размера шрифта
                    >

                        <Step>
                        <StepLabel>
                                <Tooltip title="Extra small">
                                    <Box sx={{ marginTop: '-45px', color: 'transparent' }}>Esmall</Box>
                                </Tooltip>
                            </StepLabel>
                            </Step>
                            <Step>
                            <StepLabel>
                                <Tooltip title="Small">
                                    <Box sx={{ marginTop: '-45px', color: 'transparent' }}>Small</Box>
                                </Tooltip>
                            </StepLabel>
                        </Step>
                        <Step>
                        <StepLabel>
                                <Tooltip title="Default">
                                    <Box sx={{ marginTop: '-45px', color: 'transparent' }}>Default</Box>
                                </Tooltip>
                            </StepLabel>
                        </Step>
                        <Step>
                        <StepLabel>
                                <Tooltip title="Large">
                                    <Box sx={{ marginTop: '-45px', color: 'transparent' }}>Large</Box>
                                </Tooltip>
                            </StepLabel>
                        </Step>
                        <Step>
                        <StepLabel>
                                <Tooltip title="Extra large">
                                    <Box sx={{ marginTop: '-45px', color: 'transparent' }}>Elarge</Box>
                                </Tooltip>
                            </StepLabel>
                        </Step>

                    </HorizontalStepper>
                    <Typography sx={{ fontSize: '28px' }}>Aa</Typography>
                </Box>



                <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>
                    Color
                </Typography>


                <Typography sx={{ fontSize: '12px', fontWeight: '700' }}>
                    Background
                </Typography>


            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose} variant="contained" color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ThemeDialog;