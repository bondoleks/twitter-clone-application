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

export default function ContainerBirthday({value, setValue}) {

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

  const [day, setDay] = useState(""); // Добавьте состояние "day"
  const [month, setMonth] = useState(""); // Добавьте состояние "month"
  const [year, setYear] = useState(""); // Добавьте состояние "year"
  const [birthdate, setBirthday] = useState("");

  const months = [
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
  ];

  const handleDayChange = (event) => {
    setDay(event.target.value);
    updateBirthday(event.target.value, month, year);
  };

const handleMonthChange = (event) => {
    const monthValue = event.target.value;
    const monthIndex = months.indexOf(monthValue) + 1;
    
    setMonth(monthValue);
    updateBirthday(day, monthIndex, year);
  };

  const handleYearChange = (event) => {
    const formattedMonth = months.indexOf(month) + 1;
    setYear(event.target.value);
    updateBirthday(day, formattedMonth, event.target.value);
  };
  
  const updateBirthday = (day, monthIndex, year) => {
    const formattedMonth = monthIndex.toString().padStart(2, '0');
    const formattedDate = `${day}.${formattedMonth}.${year}`;
    setValue(formattedDate);
    console.log("birthdate:", formattedDate); // Вывод значения в консоль
  };

  const [buttonColor, setButtonColor] = useState(null);

  useEffect(() => {
    const savedColor = localStorage.getItem('buttonColor');
    if (savedColor) {
      setButtonColor(savedColor);
    }
  }, []);

  useEffect(() => {
    console.log("day:", day);
    console.log("month:", month);
    console.log("year:", year);
    console.log("birthdate:", birthdate);
  }, [day, month, year, birthdate]);

  return (
    <>
      {isOpen ? (
        <Container>
          <Typography sx={{ marginTop: '8px', fontSize: '14px' }}>
            Birth date
            <FiberManualRecordSharpIcon sx={{ fontSize: '4px', marginInline: '8px', paddingBottom: '4px' }} />
            <Link onClick={handleOpenMod2} underline="hover" sx={{ textDecoration: 'none', cursor: 'pointer', color: buttonColor }}>
              Edit
            </Link>

            <ModalEditBirthdate toggleContainers={toggleContainers} open={openMod2} onClose={handleCloseMod2} initialBirthdate={birthdate}  />            
          </Typography>
          <Typography>
            Mounth Day, Year
          </Typography>
        </Container>
      ) : (
        <Container>
          <Typography sx={{ marginTop: '8px', fontSize: '14px' }}>
            Birth date
            <FiberManualRecordSharpIcon sx={{ fontSize: '4px', marginInline: '8px', paddingBottom: '4px' }} />
            <Link onClick={toggleContainers} underline="hover" sx={{ textDecoration: 'none', cursor: 'pointer', color: buttonColor }}>
              Cancel
            </Link>
          </Typography>
          <Typography>
            This should be the date of birth of the person using the account.
          </Typography>

          <Grid container spacing={2} sx={{ marginTop: '12px' }}>
            <Grid item xs={4}>
              <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root': { borderColor: borderColor } }}>
                <InputLabel id="day-label" sx={{ color: theme.palette.text.primary }}>
                  Day
                </InputLabel>
                <Select
                  labelId="day-label"
                  id="day-select"
                  value={day}
                  label="Day"
                  sx={{ '& .MuiSelect-icon': { color: theme.palette.text.primary } }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: theme.palette.background.default,
                        color: theme.palette.text.primary,
                        maxHeight: '200px',
                        overflowY: 'auto',
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
                <InputLabel id="month-label" sx={{ color: theme.palette.text.primary }}>
                  Month
                </InputLabel>

              <Select
                labelId="month-label"
                id="month-select"
                value={month}
                label="Month"
                sx={{ '& .MuiSelect-icon': { color: theme.palette.text.primary } }}
                MenuProps={{
                  PaperProps: {
                    sx: {
                      backgroundColor: theme.palette.background.default,
                      color: theme.palette.text.primary,
                      maxHeight: '200px',
                      overflowY: 'auto',
                    }
                  },
                }}
                onChange={handleMonthChange}
              >
                {months.map((month, i) => (
                  <MenuItem key={i + 1} value={month}>
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
                sx={{
                  width: '100%',
                  marginBottom: '10px',
                  '& .MuiInputBase-input': { color: theme.palette.text.primary },
                  '& .MuiOutlinedInput-root': { borderColor: theme.palette.text.primary },
                  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.text.primary },
                  '& .MuiInputLabel-root': { color: theme.palette.text.primary },
                }}
              />
            </Grid>
          </Grid>
        </Container>
      )}
    </>
  );
}


// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   TextField,
//   Grid
// } from "@mui/material";
// import Link from '@mui/material/Link';
// import FiberManualRecordSharpIcon from '@mui/icons-material/FiberManualRecordSharp';
// import ModalEditBirthdate from "./ModalEditBirthdate";
// import { useTheme } from '@mui/material/styles';

// export default function ContainerBirthday(value) {
//   const theme = useTheme();

//   const borderColor = theme.palette.text.primary; // Цвет бордера

//   const [openMod2, setOpenMod2] = useState(false);
//   const handleOpenMod2 = () => {
//     setOpenMod2(true);
//   };

//   const handleCloseMod2 = () => {
//     setOpenMod2(false);
//   };

//   const [isOpen, setIsOpen] = useState(true);
//   const toggleContainers = () => {
//     setIsOpen(!isOpen);
//     setOpenMod2(false);
//   };

//   const [day, setDay] = useState(""); // Добавьте состояние "day"
//   const [month, setMonth] = useState(""); // Добавьте состояние "month"
//   const [year, setYear] = useState(""); // Добавьте состояние "year"
//   const [birthdate, setBirthday] = useState("");

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
//   ];

//   const handleDayChange = (event) => {
//     setDay(event.target.value);
//     updateBirthday(event.target.value, month, year);
//   };

// const handleMonthChange = (event) => {
//     const monthValue = event.target.value;
//     const monthIndex = months.indexOf(monthValue) + 1;
    
//     setMonth(monthValue);
//     updateBirthday(day, monthIndex, year);
//   };

//   const handleYearChange = (event) => {
//     const formattedMonth = months.indexOf(month) + 1;
//     setYear(event.target.value);
//     updateBirthday(day, formattedMonth, event.target.value);
//   };
  
//   const updateBirthday = (day, monthIndex, year) => {
//     const formattedMonth = monthIndex.toString().padStart(2, '0');
//     const formattedDate = `${day}.${formattedMonth}.${year}`;
//     setBirthday(formattedDate);
//     console.log("birthdate:", formattedDate); // Вывод значения в консоль
//   };

//   const [buttonColor, setButtonColor] = useState(null);

//   useEffect(() => {
//     const savedColor = localStorage.getItem('buttonColor');
//     if (savedColor) {
//       setButtonColor(savedColor);
//     }
//   }, []);

//   useEffect(() => {
//     console.log("day:", day);
//     console.log("month:", month);
//     console.log("year:", year);
//     console.log("birthdate:", birthdate);
//   }, [day, month, year, birthdate]);

//   return (
//     <>
//       {isOpen ? (
//         <Container>
//           <Typography sx={{ marginTop: '8px', fontSize: '14px' }}>
//             Birth date
//             <FiberManualRecordSharpIcon sx={{ fontSize: '4px', marginInline: '8px', paddingBottom: '4px' }} />
//             <Link onClick={handleOpenMod2} underline="hover" sx={{ textDecoration: 'none', cursor: 'pointer', color: buttonColor }}>
//               Edit
//             </Link>

//             <ModalEditBirthdate toggleContainers={toggleContainers} open={openMod2} onClose={handleCloseMod2} initialBirthdate={birthdate}  />            
//           </Typography>
//           <Typography>
//             Mounth Day, Year
//           </Typography>
//         </Container>
//       ) : (
//         <Container>
//           <Typography sx={{ marginTop: '8px', fontSize: '14px' }}>
//             Birth date
//             <FiberManualRecordSharpIcon sx={{ fontSize: '4px', marginInline: '8px', paddingBottom: '4px' }} />
//             <Link onClick={toggleContainers} underline="hover" sx={{ textDecoration: 'none', cursor: 'pointer', color: buttonColor }}>
//               Cancel
//             </Link>
//           </Typography>
//           <Typography>
//             This should be the date of birth of the person using the account.
//           </Typography>

//           <Grid container spacing={2} sx={{ marginTop: '12px' }}>
//             <Grid item xs={4}>
//               <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root': { borderColor: borderColor } }}>
//                 <InputLabel id="day-label" sx={{ color: theme.palette.text.primary }}>
//                   Day
//                 </InputLabel>
//                 <Select
//                   labelId="day-label"
//                   id="day-select"
//                   value={day}
//                   label="Day"
//                   sx={{ '& .MuiSelect-icon': { color: theme.palette.text.primary } }}
//                   MenuProps={{
//                     PaperProps: {
//                       sx: {
//                         backgroundColor: theme.palette.background.default,
//                         color: theme.palette.text.primary,
//                         maxHeight: '200px',
//                         overflowY: 'auto',
//                       }
//                     },
//                   }}
//                   onChange={handleDayChange}
//                 >
//                   {[...Array(31)].map((_, i) => (
//                     <MenuItem key={i + 1} value={i + 1}>
//                       {i + 1}
//                     </MenuItem>
//                   ))}
//                 </Select>
//               </FormControl>
//             </Grid>
//             <Grid item xs={4}>
//               <FormControl fullWidth sx={{ '& .MuiOutlinedInput-root': { borderColor: borderColor } }}>
//                 <InputLabel id="month-label" sx={{ color: theme.palette.text.primary }}>
//                   Month
//                 </InputLabel>

//               <Select
//                 labelId="month-label"
//                 id="month-select"
//                 value={month}
//                 label="Month"
//                 sx={{ '& .MuiSelect-icon': { color: theme.palette.text.primary } }}
//                 MenuProps={{
//                   PaperProps: {
//                     sx: {
//                       backgroundColor: theme.palette.background.default,
//                       color: theme.palette.text.primary,
//                       maxHeight: '200px',
//                       overflowY: 'auto',
//                     }
//                   },
//                 }}
//                 onChange={handleMonthChange}
//               >
//                 {months.map((month, i) => (
//                   <MenuItem key={i + 1} value={month}>
//                     {month}
//                   </MenuItem>
//                 ))}
//               </Select>
               

//               </FormControl>
//             </Grid>
//             <Grid item xs={4}>
//               <TextField
//                 fullWidth
//                 label="Year"
//                 value={year}
//                 onChange={handleYearChange}
//                 sx={{
//                   width: '100%',
//                   marginBottom: '10px',
//                   '& .MuiInputBase-input': { color: theme.palette.text.primary },
//                   '& .MuiOutlinedInput-root': { borderColor: theme.palette.text.primary },
//                   '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.text.primary },
//                   '& .MuiInputLabel-root': { color: theme.palette.text.primary },
//                 }}
//               />
//             </Grid>
//           </Grid>
//         </Container>
//       )}
//     </>
//   );
// }
