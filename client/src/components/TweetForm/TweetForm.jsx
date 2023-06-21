import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    Button,
    IconButton,
    Box,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import ContainerTweetForm from "./ContainerTweetForm";
import ToolbarTweetForm from "./ToolbarTweetForm";
import { useTheme } from '@mui/material/styles';
import { api } from "../../redux/service/api";
import Alert from "@mui/material/Alert";

export default function TweetForm({ open, onClose }) {

    const theme = useTheme();

    const TweetFormStyles = {
        backgroundColor: theme.palette.background.default,
    };

    const [file, setFile] = useState([]);
    const [tweetText, setTweetText] = useState("");

    const [buttonColor, setButtonColor] = useState(null);

    useEffect(() => {
        const savedColor = localStorage.getItem('buttonColor');
        if (savedColor) {
            setButtonColor(savedColor);
        }
    }, []);

    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
        handleCloseMenu();
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleColorChange = (color) => {
        setButtonColor(color);
        localStorage.setItem('buttonColor', color);
    };

    const handleTweetSubmit = () => {
        const formData = new FormData();
        formData.append('tweetBody', tweetText);
        formData.append('parentTweetId', 0);
        formData.append('user_id', '1');

        for (const f of file) {
            formData.append('file', f);
            console.log("file", f)
        }


        // if (file) {
        //     formData.append('file', file);
        // } 
        // formData.append('file', file);


        api.post("https://twitter-clone-application.herokuapp.com/tweets/tweet/save", formData)
            .then(response => {
                console.log(response);
                alert("Success!");
            })
            .catch(error => {
                console.error(error);
                // Actions on error
                alert("Error!: " + error.message);
                if (error.response) {
                    console.log("Server Response:", error.response.data);
                }
            });
            // .catch(error => {
            //     console.error(error);
            //     // Actions on error
            //     alert("Error!: " + error.message);
            // });
    };

    return (

        <Dialog open={open} onClose={onClose} >

            <IconButton sx={{ position: 'absolute', top: '0', left: '0' }}>
                <CloseIcon onClick={onClose} color='gray' />
            </IconButton>

            <DialogContent sx={{ maxWidth: 'md' }} style={TweetFormStyles}>

                <ContainerTweetForm tweetText={tweetText} setTweetText={setTweetText} />

                <Box sx={{
                    borderTop: "1px solid #e1e8ed",
                    width: "100%",
                    my: 2
                }}></Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>

                    <ToolbarTweetForm file={file} setFile={setFile} setTweetText={setTweetText} />

                    <Button onClick={handleTweetSubmit} variant="contained" size="small" sx={{
                        textTransform: 'none',
                        borderRadius: '20px',
                        height: '30px',
                        background: buttonColor
                    }}>
                        Tweet
                    </Button>

                </Box>

            </DialogContent>

        </Dialog>
    );
}

// import React, { useState, useEffect } from "react";
// import {
//     Dialog,
//     DialogContent,
//     Button,
//     IconButton,
//     Box,
// } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import ContainerTweetForm from "./ContainerTweetForm";
// import ToolbarTweetForm from "./ToolbarTweetForm";
// import { useTheme } from '@mui/material/styles';
// import { api } from "../../redux/service/api";
// import Alert from "@mui/material/Alert";

// export default function TweetForm({ open, onClose }) {

//     const theme = useTheme();

//     const TweetFormStyles = {
//         backgroundColor: theme.palette.background.default,
//     };

//     const [file, setFile] = useState(null);
//     const [tweetText, setTweetText] = useState("");

//     const [buttonColor, setButtonColor] = useState(null);

//     useEffect(() => {
//         const savedColor = localStorage.getItem('buttonColor');
//         if (savedColor) {
//             setButtonColor(savedColor);
//         }
//     }, []);

//     const [openModal, setOpenModal] = useState(false);

//     const handleOpenModal = () => {
//         setOpenModal(true);
//         handleCloseMenu();
//     };

//     const handleCloseModal = () => {
//         setOpenModal(false);
//     };

//     const handleColorChange = (color) => {
//         setButtonColor(color);
//         localStorage.setItem('buttonColor', color);
//     };

//     const handleTweetSubmit = () => {
//         const formData = new FormData();
//         formData.append('tweetBody', tweetText);
//         formData.append('parentTweetId', 0);
//         formData.append('user_id', '1');

//         formData.append('file', file || null);
//         console.log(file)
        
//         // if (file) {
//         //     formData.append('file', file);
//         // } 
//         // formData.append('file', file);


//         api.post("https://twitter-clone-application.herokuapp.com/tweets/tweet/save", formData)
//             .then(response => {
//                 console.log(response);
//                 alert("Success!");
//             })
//             .catch(error => {
//                 console.error(error);
//                 // Actions on error
//                 alert("Error!: " + error.message);
//                 if (error.response) {
//                     console.log("Server Response:", error.response.data);
//                 }
//             });
//             // .catch(error => {
//             //     console.error(error);
//             //     // Actions on error
//             //     alert("Error!: " + error.message);
//             // });
//     };

//     return (

//         <Dialog open={open} onClose={onClose} >

//             <IconButton sx={{ position: 'absolute', top: '0', left: '0' }}>
//                 <CloseIcon onClick={onClose} color='gray' />
//             </IconButton>

//             <DialogContent sx={{ maxWidth: 'md' }} style={TweetFormStyles}>

//                 <ContainerTweetForm tweetText={tweetText} setTweetText={setTweetText} />

//                 <Box sx={{
//                     borderTop: "1px solid #e1e8ed",
//                     width: "100%",
//                     my: 2
//                 }}></Box>

//                 <Box sx={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center'
//                 }}>

//                     <ToolbarTweetForm file={file} setFile={setFile} setTweetText={setTweetText} />

//                     <Button onClick={handleTweetSubmit} variant="contained" size="small" sx={{
//                         textTransform: 'none',
//                         borderRadius: '20px',
//                         height: '30px',
//                         background: buttonColor
//                     }}>
//                         Tweet
//                     </Button>

//                 </Box>

//             </DialogContent>

//         </Dialog>
//     );
// }



// import React, { useState, useEffect } from "react";
// import {
//     Dialog,
//     DialogContent,
//     Button,
//     IconButton,
//     Box,
// } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import ContainerTweetForm from "./ContainerTweetForm";
// import ToolbarTweetForm from "./ToolbarTweetForm";
// import { useTheme } from '@mui/material/styles';
// import {api} from "../../redux/service/api";
// import Alert from "@mui/material/Alert";

// export default function TweetForm({ open, onClose }) {

//     const theme = useTheme();

//     const TweetFormStyles = {
//         backgroundColor: theme.palette.background.default,
//       };

//     const [file, setFile] = useState(null);
//     const [tweetText, setTweetText] = useState("");


//     const [buttonColor, setButtonColor] = useState(null);

//     useEffect(() => {
//         const savedColor = localStorage.getItem('buttonColor');
//         if (savedColor) {
//             setButtonColor(savedColor);
//         }
//     }, []);

//     const [openModal, setOpenModal] = useState(false);

//     const handleOpenModal = () => {
//         setOpenModal(true);
//         handleCloseMenu();
//     };

//     const handleCloseModal = () => {
//         setOpenModal(false);
//     };

//     const handleColorChange = (color) => {
//         setButtonColor(color);
//         localStorage.setItem('buttonColor', color);
//     };

//     const handleTweetSubmit = () => {
//         // Здесь вы можете отправить пост-запрос с tweetText и file
//         // Используйте переменные tweetText и file для доступа к данным
//         console.log("Tweet Text:", tweetText);
//         console.log("File:", file);

//         // Здесь можно отправить пост-запрос
//         api.post("https://twitter-clone-application.herokuapp.com/tweets/tweet/save", {
//             tweetBody: tweetText,
//             parentTweetId: 0,
//             user_id: 1,
//             file: file,
//         }
//             )
//             .then(response => {
//                 console.log(response);
//                 alert("Success!");
//             })
//             .catch(error => {
//                 console.error(error);
//                 // Действия при ошибке
//                 alert("Error!: " + error.message);
//             });
//     };

//     return (

//         <Dialog open={open} onClose={onClose} >

//             <IconButton sx={{ position: 'absolute', top: '0', left: '0' }}>
//                 <CloseIcon onClick={onClose} color='gray' />
//             </IconButton>

//             <DialogContent sx={{ maxWidth: 'md' }} style={TweetFormStyles}>

//                 <ContainerTweetForm tweetText={tweetText} setTweetText={setTweetText}/>

//                 <Box sx={{
//                     borderTop: "1px solid #e1e8ed",
//                     width: "100%",
//                     my: 2
//                 }}></Box>

//                 <Box sx={{
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center'
//                 }}>

//                     <ToolbarTweetForm file={file} setFile={setFile} setTweetText={setTweetText}/>

//                     <Button onClick={handleTweetSubmit} variant="contained" size="small" sx={{
//                         textTransform: 'none',
//                         borderRadius: '20px',
//                         height: '30px',
//                         background: buttonColor
//                     }}>
//                         Tweet
//                     </Button>

//                 </Box>

//             </DialogContent>

//         </Dialog>
//     );
// }


