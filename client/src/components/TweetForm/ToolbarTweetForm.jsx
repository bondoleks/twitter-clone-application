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


export default function ToolbarTweetForm({ setTweetText, setFile, file }) {
  const [buttonColor, setButtonColor] = useState();
  const [filePaths, setFilePaths] = useState([]);

  useEffect(() => {
    const savedColor = localStorage.getItem('buttonColor');
    if (savedColor) {
      setButtonColor(savedColor);
    }
  }, []);

  useEffect(() => {
    if (file) {
      const readerPromises = Array.from(file).map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            resolve(event.target.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(readerPromises).then((results) => {
        setFilePaths(results);
      });
    } else {
      setFilePaths([]);
    }
  }, [file]);


  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    const filesArray = Array.from(selectedFiles);
    setFile((prevFiles) => [...prevFiles, ...filesArray]);
  };

  const handleTweetTextChange = (e) => {
    setTweetText(e.target.value);
  };

  return (
    <Box>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {filePaths.map((filePath, index) => (
          <img
            key={index}
            alt="file"
            src={filePath}
            style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
          />
        ))}
      </div>
      <Toolbar>
        <IconButton sx={{ marginTop: '6px' }}>
          <label htmlFor="file-input">
            <input
              id="file-input"
              onChange={handleFileChange}
              accept="image/png, image/gif, image/jpeg"
              type="file"
              multiple
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
