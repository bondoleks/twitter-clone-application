import React from "react";
import { Button } from "@mui/material";


export default function ButEditBirthdate({ toggleContainers }) { 

    return (
        <Button onClick={toggleContainers} sx={{
            width: '90%',
            margin: '4px',
            color: 'white',
            backgroundColor: 'black',
            border: '1px solid black',
            height: '30px',
            borderRadius: '20px',
            textTransform: 'none',
            fontWeight: '600',
            '&:hover': { backgroundColor: 'gray' }
        }}>
            Edit
        </Button>
    );
}