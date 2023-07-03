import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { api } from "../../redux/service/api";


export default function ButSendTweet({ tweetText, id, file }) {

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

        for (const f of file) {
            formData.append('file', f);
            console.log("file", f);
        }

        console.log(formData);

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
