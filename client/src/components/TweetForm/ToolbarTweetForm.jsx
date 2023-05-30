import React, { useState, useEffect } from "react";
import {
    IconButton,
    Toolbar,
    Box
} from "@mui/material";
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import WorkHistoryOutlinedIcon from '@mui/icons-material/WorkHistoryOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import axios from "axios";
import Alert from '@mui/material/Alert';

export default function ToolbarTweetForm() {

    const [buttonColor, setButtonColor] = useState();
    const [file, setFile] = useState(null);
    const [filePath, setFilePath] = useState(null);
    const [tweetText, setTweetText] = useState("");

    useEffect(() => {
        const savedColor = localStorage.getItem('buttonColor');
        if (savedColor) {
            setButtonColor(savedColor);
        }
    }, []);


    useEffect(() => {
        if (file) setFilePath(URL.createObjectURL(file));
    }, [file]);

    const handleFileChange = (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append("file", file);
        axios({
            method: "post",
            url: "myurl",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        });
        setFile(file);
    };

    const handleTweetTextChange = (e) => {
        setTweetText(e.target.value);
    }; // Обработчик изменений текстового поля

    const handleTweetSubmit = () => {
        // Здесь вы можете отправить пост-запрос с tweetText и file
        // Используйте переменные tweetText и file для доступа к данным
        console.log("Tweet Text:", tweetText);
        console.log("File:", file);

        // Здесь можно отправить пост-запрос
        axios.post("http://localhost:8080/tweets/tweet/save", {
            tweetBody: tweetText,
            file: file
        })
            .then(response => {
                console.log(response);
                <Alert severity="success">Success!</Alert>
            })
            .catch(error => {
                console.error(error);
                // Действия при ошибке
                <Alert severity="error">Error!!!</Alert>
            });
    };

    return (
        <Box>
            {filePath && <img alt="file"
                src={filePath}
                width={200} // Задайте желаемую ширину картинки
            />}
            <Toolbar sx={{ marginLeft: '-20px' }}>
                <IconButton sx={{ marginTop: '6px' }}>
                    <label htmlFor="file-input">
                        <input
                            id="file-input"
                            onChange={handleFileChange}
                            accept="image/png, image/gif, image/jpeg"
                            type="file"
                            style={{ display: "none" }}
                        />
                        <BrokenImageOutlinedIcon sx={{ color: buttonColor }} />
                    </label>
                </IconButton>

                <IconButton>
                    <GifBoxOutlinedIcon sx={{ color: buttonColor }} />
                </IconButton>
                <IconButton>
                    <BallotOutlinedIcon sx={{ color: buttonColor }} />
                </IconButton>
                <IconButton>
                    <SentimentSatisfiedOutlinedIcon sx={{ color: buttonColor }} />
                </IconButton>
                <IconButton>
                    <WorkHistoryOutlinedIcon sx={{ color: buttonColor }} />
                </IconButton>
                <IconButton>
                    <LocationOnOutlinedIcon sx={{ color: buttonColor }} />
                </IconButton>
            </Toolbar>
        </Box>
    );
}