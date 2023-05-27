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


export default function ContainerBirthday() {

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

                <Grid container spacing={2} sx={{marginTop: '12px'}}>
                    <Grid item xs={4}>
                        <FormControl fullWidth >
                            <InputLabel id="day-label">Day</InputLabel>
                            <Select
                                labelId="day-label"
                                id="day-select"
                                value={day}
                                label="Day"
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
                        <FormControl fullWidth>
                            <InputLabel id="month-label">Month</InputLabel>
                            <Select
                                labelId="month-label"
                                id="month-select"
                                value={month}
                                label="Month"
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
                            onChange={handleYearChange}
                        />
                    </Grid>
                </Grid>

            </Container>)}

        </>
    );
}