
// import React, { useState, useRef } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import {FormControl, InputAdornment, TextField} from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
// import {styled} from "@mui/system";
// import ModalClue from "./ModalClue.jsx";
//
// const StyledSearchIcon = styled(SearchIcon)(({ inputFocus }) => ({
//   color: inputFocus ? "rgb(29, 155, 240)" : "grey",
//   "&:focus": {
//     color: "rgb(29, 155, 240)",
//   },
//   "&:hover": {
//     cursor: "pointer",
//   },
// }));
//
// const StyledCancelIcon = styled(CancelIcon)(({}) => ({
//   color: "rgb(29, 155, 240)",
//   "&:hover": {
//     cursor: "pointer",
//     color: "red",
//   },
// }));
//
// const Search = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [inputFocused, setInputFocused] = useState(false);
//
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//
//   const handleCancelClick = () => {
//     setInputValue("");
//     inputRef.current.focus();
//   };
//
//
//   const inputRef = useRef(null);
//
//   const handleInputFocus = () => {
//     setInputFocused(true);
//   };
//
//   const handleInputBlur = () => {
//     setInputFocused(false);
//   };
//
//   return (
//     <>
//       <FormControl>
//             <TextField
//                 variant="outlined"
//                 placeholder="Search Twitter"
//                  value={inputValue}
//                 inputRef={inputRef}
//                  onChange={handleInputChange}
//                onFocus={handleInputFocus}
//                  onBlur={handleInputBlur}
//                 InputProps={{
//                    startAdornment: (
//                     <InputAdornment position="start">
//                        <StyledSearchIcon inputFocused={inputFocused} />
//                      </InputAdornment>
//                    ),
//                    endAdornment: inputValue ? (
//                      <InputAdornment position="end">
//                        <StyledCancelIcon onClick={handleCancelClick} inputFocused={inputFocused}/>
//                      </InputAdornment>
//                    ) : null,
//                    sx: {
//                      marginRight: "50px",
//                      maxHeight: "40px",
//                      maxWidth: "100%",
//                      borderRadius: "50px",
//                      backgroundColor: "#F5F5F5",
//                      "&:focus-within": {
//                        backgroundColor: "white",
//                        "& .MuiSvgIcon-root": {
//                          color: "rgb(29, 155, 240)",
//                        },
//                      },
//                    },
//                  }}
//                />
//       </FormControl>
//        {inputFocused && !inputValue && <ModalClue />}
//      </>
//    );
//  };
//
//  export default Search;

// import React, { useState, useRef, useEffect } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import { FormControl, InputAdornment, TextField, Paper, Typography } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
// import { styled } from "@mui/system";
// import ModalClue from "./ModalClue.jsx";
// import {useSelector} from "react-redux";
// import {filteredUsersSelector} from "../../redux/selectors.jsx";
// import {api} from "../../redux/service/api.jsx";
//
// const StyledSearchIcon = styled(SearchIcon)(({ inputFocus }) => ({
//   color: inputFocus ? "rgb(29, 155, 240)" : "grey",
//   "&:focus": {
//     color: "rgb(29, 155, 240)",
//   },
//   "&:hover": {
//     cursor: "pointer",
//   },
// }));
//
// const StyledCancelIcon = styled(CancelIcon)(({}) => ({
//   color: "rgb(29, 155, 240)",
//   "&:hover": {
//     cursor: "pointer",
//     color: "red",
//   },
// }));
//
// const Search = () => {
//   const [inputValue, setInputValue] = useState("");
//   const [inputFocused, setInputFocused] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [filter, setFilter] = useState('')
//
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };
//
//   const handleCancelClick = () => {
//     setInputValue("");
//     inputRef.current.focus();
//   };
//
//   const inputRef = useRef(null);
//
//   const filteredStateUsers = useSelector(filteredUsersSelector)
//
//   const handleInputFocus = () => {
//     setInputFocused(true);
//   };
//
//   const handleInputBlur = () => {
//     setInputFocused(false);
//   };
//
//   const handleSearchUsers = (e) => {
//     return handleFindUser(e.target.value);
//   };
//
//     const handleFindUser = async (value) => {
//       setFilter(value)
//       const allUsers = await api.get('/tweets/usersearch', {
//         params: {
//           "search_requеst":value
//         },
//       });
//     };
//
//
//   const handleUserClick = (user) => {
//     // Handle user click and navigate to the user's profile
//     console.log("Clicked user:", user);
//   };
//
//   return (
//     <>
//       <FormControl>
//         <TextField
//           variant="outlined"
//           placeholder="Search Twitter"
//           value={inputValue}
//           inputRef={inputRef}
//           onChange={(event) => {
//             handleInputChange(event);
//             handleSearchUsers(event);
//           }}
//           onFocus={handleInputFocus}
//           onBlur={handleInputBlur}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <StyledSearchIcon inputFocused={inputFocused} />
//               </InputAdornment>
//             ),
//             endAdornment: inputValue ? (
//               <InputAdornment position="end">
//                 <StyledCancelIcon onClick={handleCancelClick} inputFocused={inputFocused} />
//               </InputAdornment>
//             ) : null,
//             sx: {
//               marginRight: "50px",
//               maxHeight: "40px",
//               maxWidth: "100%",
//               borderRadius: "50px",
//               backgroundColor: "#F5F5F5",
//               "&:focus-within": {
//                 backgroundColor: "white",
//                 "& .MuiSvgIcon-root": {
//                   color: "rgb(29, 155, 240)",
//                 },
//               },
//             },
//           }}
//         />
//       </FormControl>
//       {inputFocused && !inputValue && <ModalClue />}
//       {users.length > 0 && (
//         <Paper elevation={3} sx={{ marginTop: "10px", padding: "10px" }}>
//           {users.map((user) => (
//             <Typography
//               key={user.id}
//               variant="body1"
//               sx={{ cursor: "pointer", marginBottom: "5px" }}
//               onClick={() => handleUserClick(user)}
//             >
//               {user.name}
//             </Typography>
//           ))}
//
//         </Paper>
//       )}
//     </>
//   );
// };
//
// export default Search;


//V3

// import React, { useState, useRef } from 'react';
// import { FormControl, InputAdornment, TextField, Paper, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import SearchIcon from '@mui/icons-material/Search';
// import CancelIcon from '@mui/icons-material/Cancel';
// import ModalClue from './ModalClue.jsx';
// import { useSelector } from 'react-redux';
// import { filteredUsersSelector } from '../../redux/selectors.jsx';
// import { api } from '../../redux/service/api.jsx';
//
// const StyledSearchIcon = styled(SearchIcon)(({ inputFocus }) => ({
//   color: inputFocus ? 'rgb(29, 155, 240)' : 'grey',
// }));
//
// const StyledCancelIcon = styled(CancelIcon)(({}) => ({
//   color: 'rgb(29, 155, 240)',
//   '&:hover': {
//     cursor: 'pointer',
//     color: 'red',
//   },
// }));
//
// const Search = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [inputFocused, setInputFocused] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [filter, setFilter] = useState('');
//   const inputRef = useRef(null);
//
//   const filteredStateUsers = useSelector(filteredUsersSelector);
//
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//     handleFindUser(value);
//   };
//
//   const handleCancelClick = () => {
//     setInputValue('');
//     inputRef.current.focus();
//   };
//
//   const handleInputFocus = () => {
//     setInputFocused(true);
//   };
//
//   const handleInputBlur = () => {
//     setInputFocused(false);
//   };
//
//   const handleFindUser = async (value) => {
//     setFilter(value);
//     const allUsers = await api.get('/tweets/usersearch', {
//       params: {
//         search_requеst: value,
//       },
//     });
//     setUsers(allUsers);
//   };
//
//
//   return (
//     <>
//       <FormControl>
//         <TextField
//           variant="outlined"
//           placeholder="Search Twitter"
//           value={inputValue}
//           inputRef={inputRef}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//           onBlur={handleInputBlur}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <StyledSearchIcon inputFocus={inputFocused} />
//               </InputAdornment>
//             ),
//             endAdornment: inputValue ? (
//               <InputAdornment position="end">
//                 <StyledCancelIcon onClick={handleCancelClick} inputFocus={inputFocused} />
//               </InputAdornment>
//             ) : null,
//             sx: {
//               marginRight: '50px',
//               maxHeight: '40px',
//               maxWidth: '100%',
//               borderRadius: '50px',
//               backgroundColor: '#F5F5F5',
//               '&:focus-within': {
//                 backgroundColor: 'white',
//                 '& .MuiSvgIcon-root': {
//                   color: 'rgb(29, 155, 240)',
//                 },
//               },
//             },
//           }}
//         />
//       </FormControl>
//       {inputFocused && !inputValue && <ModalClue />}
//       {users.length > 0 && (
//         <Paper elevation={3} sx={{ marginTop: '10px', padding: '10px' }}>
//           {users.map((user) => (
//             <Typography key={user.id}>
//               {user.name}
//             </Typography>
//           ))}
//         </Paper>
//       )}
//     </>
//   );
// };
//
// export default Search;

//V4

// import React, { useState, useRef } from 'react';
// import {FormControl, InputAdornment, TextField, Paper, Typography, ListItem} from '@mui/material';
// import { styled } from '@mui/system';
// import SearchIcon from '@mui/icons-material/Search';
// import CancelIcon from '@mui/icons-material/Cancel';
// import ModalClue from './ModalClue.jsx';
// import { useSelector } from 'react-redux';
// import { filteredUsersSelector } from '../../redux/selectors.jsx';
// import { api } from '../../redux/service/api.jsx';
//
// const StyledSearchIcon = styled(SearchIcon)(({ inputFocus }) => ({
//   color: inputFocus ? 'rgb(29, 155, 240)' : 'grey',
// }));
//
// const StyledCancelIcon = styled(CancelIcon)(({}) => ({
//   color: 'rgb(29, 155, 240)',
//   '&:hover': {
//     cursor: 'pointer',
//     color: 'red',
//   },
// }));
//
// const Search = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [inputFocused, setInputFocused] = useState(false);
//   const [users, setUsers] = useState([]);
//   const inputRef = useRef(null);
//
//   const filteredStateUsers = useSelector(filteredUsersSelector);
//
//
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//     handleFindUser(value);
//   };
//
//   const handleCancelClick = () => {
//     setInputValue('');
//     inputRef.current.focus();
//   };
//
//   const handleInputFocus = () => {
//     setInputFocused(true);
//   };
//
//   const handleInputBlur = () => {
//     setInputFocused(false);
//   };
//
//   const handleFindUser = async (value) => {
//     if (value.trim() === '') {
//       setUsers([]);
//       return;
//     }
//
//     const allUsers = await api.get('/tweets/usersearch', {
//       params: {
//         search_requеst: value,
//       },
//     });
//     setUsers(allUsers);
//   };
//
//   const handleUserClick = (user) => {
//     // Handle user click and navigate to the user's profile
//     console.log('Clicked user:', user);
//   };
//
//   return (
//     <>
//       <FormControl>
//         <TextField
//           variant="outlined"
//           placeholder="Search Twitter"
//           value={inputValue}
//           inputRef={inputRef}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//           onBlur={handleInputBlur}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <StyledSearchIcon inputFocus={inputFocused} />
//               </InputAdornment>
//             ),
//             endAdornment: inputValue ? (
//               <InputAdornment position="end">
//                 <StyledCancelIcon onClick={handleCancelClick} inputFocus={inputFocused} />
//               </InputAdornment>
//             ) : null,
//             sx: {
//               marginRight: '50px',
//               maxHeight: '40px',
//               maxWidth: '100%',
//               borderRadius: '50px',
//               backgroundColor: '#F5F5F5',
//               '&:focus-within': {
//                 backgroundColor: 'white',
//                 '& .MuiSvgIcon-root': {
//                   color: 'rgb(29, 155, 240)',
//                 },
//               },
//             },
//           }}
//         />
//       </FormControl>
//       {inputFocused && !inputValue && <ModalClue />}
//       {users.length > 0 && inputValue && (
//       <Paper elevation={3} sx={{ marginTop: '10px', padding: '10px' }}>
//         {users.map((user) => (
//           <div key={user.id} onClick={() => handleUserClick(user)} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', cursor: 'pointer' }}>
//             <img src={user.avatar} alt={user.name} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
//             <div>
//               <Typography variant="body1">{user.name}</Typography>
//               <Typography variant="body2">{user.lastName}</Typography>
//             </div>
//           </div>
//         ))}
//       </Paper>
//     )}
//
//       {users.length > 0 && inputValue && (
//         <Paper elevation={3} sx={{padding: '10px', height: "300px" }}>
//           {users.map((user) => (
//             <ListItem key={user.id} onClick={() => handleUserClick(user)}>
//               {user.name}
//             </ListItem>
//           ))}
//         </Paper>
//       )}
//     </>
//   );
// };
//
// export default Search;

//V5
// import React, { useState, useRef } from 'react';
// import {FormControl, InputAdornment, TextField, Paper, Typography, ListItem, ListItemText, Avatar} from '@mui/material';
// import { styled } from '@mui/system';
// import SearchIcon from '@mui/icons-material/Search';
// import CancelIcon from '@mui/icons-material/Cancel';
// import ModalClue from './ModalClue.jsx';
// import { useSelector } from 'react-redux';
// import { filteredUsersSelector } from '../../redux/selectors.jsx';
// import { api } from '../../redux/service/api.jsx';
// import { useNavigate } from 'react-router-dom';
//
// const StyledSearchIcon = styled(SearchIcon)(({ inputFocus }) => ({
//   color: inputFocus ? 'rgb(29, 155, 240)' : 'grey',
// }));
//
// const StyledCancelIcon = styled(CancelIcon)(({}) => ({
//   color: 'rgb(29, 155, 240)',
//   '&:hover': {
//     cursor: 'pointer',
//     color: 'red',
//   },
// }));
//
// const Search = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [inputFocused, setInputFocused] = useState(false);
//   const [users, setUsers] = useState([]);
//   const inputRef = useRef(null);
//
//   const filteredStateUsers = useSelector(filteredUsersSelector);
//
//   const navigate = useNavigate()
//
//
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//     handleFindUser(value);
//   };
//
//   const handleCancelClick = () => {
//     setInputValue('');
//     inputRef.current.focus();
//   };
//
//   const handleInputFocus = () => {
//     setInputFocused(true);
//   };
//
//   const handleInputBlur = () => {
//     setInputFocused(false);
//   };
//
//   const handleFindUser = async (value) => {
//     if (value.trim() === '') {
//       setUsers([]);
//       return;
//     }
//
//     const allUsers = await api.get('/tweets/usersearch', {
//       params: {
//         search_requеst: value,
//       },
//     });
//     setUsers(allUsers);
//   };
//
//   const handleUserClick = (user) => {
//     navigate(`/profile/${user.id}`);
//     console.log('Clicked user:', user);
//   };
//
//   return (
//     <>
//       <FormControl>
//         <TextField
//           variant="outlined"
//           placeholder="Search Twitter"
//           value={inputValue}
//           inputRef={inputRef}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//           onBlur={handleInputBlur}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <StyledSearchIcon inputFocus={inputFocused} />
//               </InputAdornment>
//             ),
//             endAdornment: inputValue ? (
//               <InputAdornment position="end">
//                 <StyledCancelIcon onClick={handleCancelClick} inputFocus={inputFocused} />
//               </InputAdornment>
//             ) : null,
//             sx: {
//               marginRight: '50px',
//               maxHeight: '40px',
//               maxWidth: '100%',
//               borderRadius: '50px',
//               backgroundColor: '#F5F5F5',
//               '&:focus-within': {
//                 backgroundColor: 'white',
//                 '& .MuiSvgIcon-root': {
//                   color: 'rgb(29, 155, 240)',
//                 },
//               },
//             },
//           }}
//         />
//       </FormControl>
//       {inputFocused && !inputValue && <ModalClue />}
//       {users.length > 0 && inputValue && (
//         <Paper elevation={3} sx={{ height: "400px", overflowY: "scroll" }}>
//           {users.map((user) => (
//             <ListItem key={user.id} onClick={() => handleUserClick(user)} button>
//               <Avatar src={user.av_imagerUrl} alt={user.firstName} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
//               <ListItemText primary={user.firstName} secondary={user.lastName} />
//             </ListItem>
//           ))}
//         </Paper>
//       )}
//     </>
//   );
// };
//
// export default Search;


//V6
// import React, { useState, useRef } from 'react';
// import {
//   FormControl,
//   InputAdornment,
//   TextField,
//   Paper,
//   ListItem,
//   ListItemText,
//   Avatar,
//   useMediaQuery
// } from '@mui/material';
// import { styled } from '@mui/system';
// import SearchIcon from '@mui/icons-material/Search';
// import CancelIcon from '@mui/icons-material/Cancel';
// import ModalClue from './ModalClue.jsx';
// import { api } from '../../redux/service/api.jsx';
// import { useNavigate } from 'react-router-dom';
//
// const StyledSearchIcon = styled(SearchIcon)(({ inputFocus }) => ({
//   color: inputFocus ? 'rgb(29, 155, 240)' : 'grey',
// }));
//
// const StyledCancelIcon = styled(CancelIcon)(({}) => ({
//   color: 'rgb(29, 155, 240)',
//   '&:hover': {
//     cursor: 'pointer',
//     color: 'red',
//   },
// }));
//
// const Search = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [inputFocused, setInputFocused] = useState(false);
//   const [users, setUsers] = useState([]);
//   const inputRef = useRef(null);
//
//   const navigate = useNavigate();
//
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//     handleFindUser(value);
//   };
//
//   const handleCancelClick = () => {
//     setInputValue('');
//     inputRef.current.focus();
//   };
//
//   const handleInputFocus = () => {
//     setInputFocused(true);
//   };
//
//   const handleInputBlur = () => {
//     setInputFocused(false);
//   };
//
//   const handleFindUser = async (value) => {
//     if (value.trim() === '') {
//       setUsers([]);
//       return;
//     }
//
//     const allUsers = await api.get('/tweets/usersearch', {
//       params: {
//         search_requеst: value,
//       },
//     });
//     setUsers(allUsers);
//   };
//
//   const handleUserClick = (user) => {
//     navigate(`/profile/${user.id}`);
//     console.log('Clicked user:', user);
//     setUsers([]);
//     setInputValue("");
//   };
//
//   const isMobile = useMediaQuery('(max-width:900px)');
//
//   return (
//     <>
//       <FormControl>
//         <TextField
//           variant="outlined"
//           placeholder="Search Twitter"
//           value={inputValue}
//           inputRef={inputRef}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//           onBlur={handleInputBlur}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <StyledSearchIcon inputFocus={inputFocused} />
//               </InputAdornment>
//             ),
//             endAdornment: inputValue ? (
//               <InputAdornment position="end">
//                 <StyledCancelIcon onClick={handleCancelClick} inputFocus={inputFocused} />
//               </InputAdornment>
//             ) : null,
//             sx: {
//               marginRight: '50px',
//               maxHeight: '40px',
//               maxWidth: '100%',
//               borderRadius: '50px',
//               backgroundColor: '#F5F5F5',
//               '&:focus-within': {
//                 backgroundColor: 'white',
//                 '& .MuiSvgIcon-root': {
//                   color: 'rgb(29, 155, 240)',
//                 },
//               },
//             },
//           }}
//         />
//       </FormControl>
//       {inputFocused && !inputValue && <ModalClue  sx={{
//         position: "fixed",
//         top: "0",
//         left: "0",
//         zIndex: "9990",
//         padding: "10px",
//         backgroundColor: "#fff"
//
//       }}/>}
//       {users.length ? inputValue && (
//         <Paper elevation={3} sx={{ height: "auto", overflowY: "auto", maxHeight: "300px" }}>
//           {users.map((user) => (
//             <ListItem key={user.id} onClick={() => handleUserClick(user)} button>
//               <Avatar src={user.av_imagerUrl} alt={user.firstName} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
//               <ListItemText primary={user.firstName} secondary={user.lastName} />
//             </ListItem>
//           ))}
//         </Paper>
//       ) : null}
//     </>
//   );
// };
//
// export default Search;

// import React, { useState, useRef } from 'react';
// import {
//   FormControl,
//   InputAdornment,
//   TextField,
//   Paper,
//   ListItem,
//   ListItemText,
//   Avatar,
//   useMediaQuery
// } from '@mui/material';
// import { styled } from '@mui/system';
// import SearchIcon from '@mui/icons-material/Search';
// import CancelIcon from '@mui/icons-material/Cancel';
// import ModalClue from './ModalClue.jsx';
// import { api } from '../../redux/service/api.jsx';
// import { useNavigate } from 'react-router-dom';
//
// const StyledSearchIcon = styled(SearchIcon)(({ inputFocus }) => ({
//   color: inputFocus ? 'rgb(29, 155, 240)' : 'grey',
// }));
//
// const StyledCancelIcon = styled(CancelIcon)(({}) => ({
//   color: 'rgb(29, 155, 240)',
//   '&:hover': {
//     cursor: 'pointer',
//     color: 'red',
//   },
// }));
//
// const Search = () => {
//   const [inputValue, setInputValue] = useState('');
//   const [inputFocused, setInputFocused] = useState(false);
//   const [users, setUsers] = useState([]);
//   const inputRef = useRef(null);
//
//   const navigate = useNavigate();
//
//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputValue(value);
//     handleFindUser(value);
//   };
//
//   const handleCancelClick = () => {
//     setInputValue('');
//     inputRef.current.focus();
//   };
//
//   const handleInputFocus = () => {
//     setInputFocused(true);
//   };
//
//   const handleInputBlur = () => {
//     setInputFocused(false);
//   };
//
//   const handleFindUser = async (value) => {
//     if (value.trim() === '') {
//       setUsers([]);
//       return;
//     }
//
//     const allUsers = await api.get('/tweets/usersearch', {
//       params: {
//         search_requеst: value,
//       },
//     });
//     setUsers(allUsers);
//   };
//
//   const handleUserClick = (user) => {
//     navigate(`/profile/${user.id}`);
//     console.log('Clicked user:', user);
//     setUsers([]);
//     setInputValue("");
//   };
//
//   const isMobile = useMediaQuery('(max-width:900px)');
//   const showResults = inputFocused && inputValue && users.length > 0;
//
//   return (
//     <>
//       <FormControl>
//         <TextField
//           variant="outlined"
//           placeholder="Search Twitter"
//           value={inputValue}
//           inputRef={inputRef}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//           onBlur={handleInputBlur}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <StyledSearchIcon inputFocus={inputFocused} />
//               </InputAdornment>
//             ),
//             endAdornment: inputValue ? (
//               <InputAdornment position="end">
//                 <StyledCancelIcon onClick={handleCancelClick} inputFocus={inputFocused} />
//               </InputAdornment>
//             ) : null,
//             sx: {
//               marginRight: '50px',
//               maxHeight: '40px',
//               maxWidth: '100%',
//               borderRadius: '50px',
//               backgroundColor: '#F5F5F5',
//               '&:focus-within': {
//                 backgroundColor: 'white',
//                 '& .MuiSvgIcon-root': {
//                   color: 'rgb(29, 155, 240)',
//                 },
//               },
//             },
//           }}
//         />
//       </FormControl>
//       {showResults ? (
//         <Paper elevation={3} sx={{ height: 'auto', overflowY: 'auto', maxHeight: '300px' }}>
//           {users.map((user) => (
//             <ListItem key={user.id} onClick={() => handleUserClick(user)} button>
//               <Avatar
//                 src={user.av_imagerUrl}
//                 alt={user.firstName}
//                 style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}
//               />
//               <ListItemText primary={user.firstName} secondary={user.lastName} />
//             </ListItem>
//           ))}
//         </Paper>
//       ) : (
//         inputFocused && !inputValue && <ModalClue />
//       )}
//     </>
//   );
// };
//
// export default Search;


import React, { useState, useRef } from 'react';
import {
  FormControl,
  InputAdornment,
  TextField,
  Paper,
  ListItem,
  ListItemText,
  Avatar,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import ModalClue from './ModalClue.jsx';
import { api } from '../../redux/service/api.jsx';
import { useNavigate } from 'react-router-dom';

const StyledSearchIcon = styled(SearchIcon)(({ inputFocus }) => ({
  color: inputFocus ? 'rgb(29, 155, 240)' : 'grey',
}));

const StyledCancelIcon = styled(CancelIcon)(({}) => ({
  color: 'rgb(29, 155, 240)',
  '&:hover': {
    cursor: 'pointer',
    color: 'red',
  },
}));

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [users, setUsers] = useState([]);
  const inputRef = useRef(null);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    handleFindUser(value);
  };

  const handleCancelClick = () => {
    setInputValue('');
    inputRef.current.focus();
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleFindUser = async (value) => {
    if (value.trim() === '') {
      setUsers([]);
      return;
    }

    const allUsers = await api.get('/tweets/usersearch', {
      params: {
        search_requеst: value,
      },
    });
    setUsers(allUsers);
  };

  const handleUserClick = (user) => {
    navigate(`/profile/${user.id}`);
    console.log('Clicked user:', user);
    setUsers([]);
    setInputValue("");
  };

  const isMobile = useMediaQuery('(max-width:900px)');
  const showResults = inputFocused && inputValue && users.length > 0;

  return (
    <>
      <FormControl>
        <TextField
          variant="outlined"
          placeholder="Search Twitter"
          value={inputValue}
          inputRef={inputRef}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StyledSearchIcon inputFocus={inputFocused} />
              </InputAdornment>
            ),
            endAdornment: inputValue ? (
              <InputAdornment position="end">
                <StyledCancelIcon onClick={handleCancelClick} inputFocus={inputFocused} />
              </InputAdornment>
            ) : null,
            sx: {
              marginRight: '50px',
              fontSize: isMobile ? "14px" : "18px",
              maxHeight: '40px',
              maxWidth: '100%',
              borderRadius: '50px',
              backgroundColor: '#F5F5F5',
              '&:focus-within': {
                backgroundColor: 'white',
                '& .MuiSvgIcon-root': {
                  color: 'rgb(29, 155, 240)',
                },
              },
            },
          }}
        />
      </FormControl>
      {inputFocused && !inputValue && <ModalClue/>}

          {/*<Paper elevation={3}*/}
          {/*       sx={{*/}
          {/*         height: isMobile ? "calc(100vh - 120px)" : "300px",*/}
          {/*         width: isMobile ? "100vw" : "250px",*/}
          {/*         position: isMobile ? "fixed" : "static",*/}
          {/*         top: isMobile ? "70px" : "auto",*/}
          {/*         left: isMobile ? "0" : "auto",*/}
          {/*         zIndex: isMobile ? "9990" : "auto",*/}
          {/*         padding: isMobile ? "10px" : "0",*/}
          {/*         overflowY: "auto",*/}

          {/*       }}*/}
          {/*>*/}
          {/*  {users.map((user) => (*/}
          {/*    <ListItem key={user.id} onClick={() => handleUserClick(user)} button>*/}
          {/*      <Avatar*/}
          {/*        src={user.av_imagerUrl}*/}
          {/*        alt={user.firstName}*/}
          {/*        // style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }}*/}
          {/*      />*/}
          {/*      <ListItemText primary={user.firstName} secondary={user.lastName} />*/}
          {/*    </ListItem>*/}
          {/*  ))}*/}
          {/*</Paper>*/}

      {users.length ? inputValue && (
        <Paper elevation={3}  sx={{
          height: isMobile ? "calc(100vh - 120px)" : "300px",
          width: isMobile ? "100vw" : "250px",
          position: isMobile ? "fixed" : "static",
          top: isMobile ? "70px" : "auto",
          left: isMobile ? "0" : "auto",
          zIndex: isMobile ? "9990" : "auto",
          padding: isMobile ? "10px" : "0",
          overflowY: "auto",
        }}>
          {users.map((user) => (
            <ListItem key={user.id} onClick={() => handleUserClick(user)} button>
              <Avatar src={user.av_imagerUrl} alt={user.firstName} style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
              <ListItemText primary={user.firstName} secondary={user.lastName} />
            </ListItem>
          ))}
        </Paper>
      ) : null}
    </>
  );
};

export default Search;
