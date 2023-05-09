import React, { useState } from "react";
import {
    Container,
    Box,
    Typography
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
    };


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
                        cursor: 'pointer'
                    }}>
                        Edit
                    </Link>
                    <ModalEditBirthdate toggleContainers={toggleContainers} isOpen={isOpen} open={openMod2} onClose={handleCloseMod2} />
                </Typography>
                <Typography>
                    Mounth Day, Year
                </Typography>
            </Container>) : (<Container>
                <Typography>Зміна дати народження</Typography>
            </Container>)}

        </>
    );
}