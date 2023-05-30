import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    Grid
} from "@mui/material";
import Link from '@mui/material/Link';
import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
import ModalEditBirthdate from "./ModalEditBirthdate";
import { useTheme } from '@mui/material/styles';


export default function ContainerBirthday() {

    const theme = useTheme();

    const borderColor = theme.palette.text.primary; // Цвет бордера

    const [openMod2, setOpenMod2] = useState(false);

    const handleOpenMod2 = () => {
        setOpenMod2(true);
    };

    const handleCloseMod2 = () => {
        setOpenMod2(false);
    };

    const [isOpen, setIsOpen] = useState(true);

    const toggleContainers = () => {
        setIsOpen(!isOpen);
        setOpenMod2(false);
    };

    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const handleDayChange = (event) => {
        setDay(event.target.value);
    };

    const handleMonthChange = (event) => {
        setMonth(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const [buttonColor, setButtonColor] = useState(null);

    useEffect(() => {
        const savedColor = localStorage.getItem('buttonColor');
        if (savedColor) {
            setButtonColor(savedColor);
        }
    }, []);


    return (

        <>

            {isOpen ? (<Container>
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
                        cursor: 'pointer',
                        color: buttonColor
                    }}>
                        Edit
                    </Link>
                    <ModalEditBirthdate toggleContainers={toggleContainers} open={openMod2} onClose={handleCloseMod2} />
                </Typography>
                <Typography>
                    Mounth Day, Year
                </Typography>
            </Container>) : (<Container>
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
                    <Link onClick={toggleContainers} underline="hover" sx={{
                        textDecoration: 'none',
                        cursor: 'pointer',
                        color: buttonColor
                    }}>
                        Cancel
                    </Link>
                </Typography>
                <Typography>
                    This should be the date of birth of the person using the account.
                </Typography>

                <Grid container spacing={2} sx={{ marginTop: '12px' }}>
                    <Grid item xs={4}>
                        <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root': { borderColor: borderColor } }}>
                            <InputLabel id="day-label" sx={{
                                color: theme.palette.text.primary, // Светлый цвет для лейбла на темной теме
                            }}>
                                Day
                            </InputLabel>
                            <Select
                                labelId="day-label"
                                id="day-select"
                                value={day}
                                label="Day"
                                sx={{
                                    '& .MuiSelect-icon': {
                                      color: theme.palette.text.primary, // Светлый цвет для стрелочки
                                    },
                                  }}
                                  MenuProps={{
                                    PaperProps: {
                                      sx: {
                                        backgroundColor: theme.palette.background.default, // Цвет фона выпадающего меню
                                        color: theme.palette.text.primary, // Цвет текста внутри выпадающего меню
                                      }
                                    },
                                  }}
                                onChange={handleDayChange}
                            >
                                {[...Array(31)].map((_, i) => (
                                    <MenuItem key={i + 1} value={i + 1}>
                                        {i + 1}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root': { borderColor: borderColor } }}>
                            <InputLabel id="month-label" sx={{
                                color: theme.palette.text.primary, // Светлый цвет для лейбла на темной теме
                            }}>
                                Month
                            </InputLabel>
                            <Select
                                labelId="month-label"
                                id="month-select"
                                value={month}
                                label="Month"
                                sx={{
                                    '& .MuiSelect-icon': {
                                      color: theme.palette.text.primary, // Светлый цвет для стрелочки
                                    },
                                  }}
                                  MenuProps={{
                                    PaperProps: {
                                      sx: {
                                        backgroundColor: theme.palette.background.default, // Цвет фона выпадающего меню
                                        color: theme.palette.text.primary, // Цвет текста внутри выпадающего меню
                                      }
                                    },
                                  }}
                                
                                onChange={handleMonthChange}
                                >
                                {[
                                    "January",
                                    "February",
                                    "March",
                                    "April",
                                    "May",
                                    "June",
                                    "July",
                                    "August",
                                    "September",
                                    "October",
                                    "November",
                                    "December"
                                ].map((month, i) => (
                                    <MenuItem key={i + 1} value={i + 1}>
                                        {month}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            fullWidth
                            label="Year"
                            value={year}
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
                            }}
                            onChange={handleYearChange}
                        />
                    </Grid>
                </Grid>

            </Container>)}

        </>
    );
}