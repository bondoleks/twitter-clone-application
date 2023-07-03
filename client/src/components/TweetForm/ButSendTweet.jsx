import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { api } from "../../redux/service/api";

export default function ButSendTweet({ tweetText, id, file }) {
    const maxFiles = 4; // Максимальное количество файлов, которое вы хотите добавить
    const fileCount = Math.min(file.length, maxFiles); // Определение количества файлов для добавления

    const [buttonColor, setButtonColor] = useState(null);

    useEffect(() => {
        const savedColor = localStorage.getItem('buttonColor');
        if (savedColor) {
            setButtonColor(savedColor);
        }
    }, []);

    const handleTweetSubmit = () => {
        const formData = new FormData();
        formData.append('tweetBody', tweetText);
        formData.append('parentTweetId', 0);
        formData.append('user_id', id);

        const fileArray = Array.from(file);
        for (let i = 0; i < fileCount; i++) {
            formData.append('file', fileArray[i]);
            console.log("file", fileArray[i]);
        }

        api.post("https://twitter-clone-application.herokuapp.com/api/v1/tweets/tweet/save", formData)
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
    };

    return (
        <Button onClick={handleTweetSubmit} variant="contained" size="small" sx={{
            textTransform: 'none',
            borderRadius: '20px',
            height: '30px',
            background: buttonColor,
            marginLeft: '8px'
        }}>
            Tweet
        </Button>
    );
}



// export default function ButSendTweet({ tweetText, id, file }) {

//     // const [uploadedFiles, setUploadedFiles] = useState([]);

//     // useEffect(() => {
//     //     if (file) {
//     //         const fileList = Array.from(file);
//     //         setUploadedFiles(fileList);
//     //     }
//     // }, [file]);

//     const maxFiles = 4; // Максимальное количество файлов, которое вы хотите добавить
//     const fileCount = Math.min(file.length, maxFiles); // Определение количества файлов для добавления

//     const [buttonColor, setButtonColor] = useState(null);

//     useEffect(() => {
//         const savedColor = localStorage.getItem('buttonColor');
//         if (savedColor) {
//             setButtonColor(savedColor);
//         }
//     }, []);

//     const handleTweetSubmit = () => {
//         const formData = new FormData();
//         formData.append('tweetBody', tweetText);
//         formData.append('parentTweetId', 0);
//         formData.append('user_id', id);

//         // for (const f of file) {
//         //     formData.append('file', f);
//         //     console.log("file", f);
//         // }

//         // for (const f of uploadedFiles) {
//         //     formData.append('file', f);
//         //     console.log("file", f);
//         //   }

//         // for (let i = 0; i < fileCount; i++) {
//         //     formData.append('file', file[i]);
//         //     console.log("file", file[i]);
//         //   }

//         const fileArray = Array.from(file);
//         fileArray.forEach((f) => {
//             formData.append('file', f);
//         });

//         api.post("https://twitter-clone-application.herokuapp.com/api/v1/tweets/tweet/save", formData)
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
//     };

//     return (
//         <Button onClick={handleTweetSubmit} variant="contained" size="small" sx={{
//             textTransform: 'none',
//             borderRadius: '20px',
//             height: '30px',
//             background: buttonColor,
//             marginLeft: '8px'
//         }}>
//             Tweet
//         </Button>
//     );
// }
