import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { api } from "../../redux/service/api";

export default function ButSendTweet({ tweetText, id, file, closeModal, setFile, setTweetText }) {
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
                closeModal(); // Вызов функции для закрытия окна
                setFile([]); // Очистить состояние файла
                setTweetText(""); // Очистить состояние текста твита
            })
            .catch(error => {
                console.error(error);
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
            background: buttonColor ? buttonColor : '#0080ff',
            marginLeft: '8px'
        }}>
            Tweet
        </Button>
    );
}

