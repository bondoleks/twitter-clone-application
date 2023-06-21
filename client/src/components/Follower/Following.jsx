import React, { useState } from 'react';
import { Typography, Box, Button} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';

const Following = ({ showBorder }) => {
    const theme = useTheme();
    const [isFollowing, setIsFollowing] = useState(true);

    const handleButtonClick = () => {
        setIsFollowing(!isFollowing);
    };

    const buttonStyles = {
        backgroundColor: theme.palette.background.default,
        color: isFollowing ? theme.palette.text.primary : 'red',
        borderColor: isFollowing ? theme.palette.text.primary : 'red',
        textTransform: 'none',
        borderRadius: '16px',
        marginRight: '8px'
    };

    return (

            <Box display={'flex'} alignItems={'center'}>
                <Box display={'flex'}>
                    <Avatar
                        alt="User Avatar"
                        src="../../img/avatar.png"
                        sx={{
                            width: '7%',
                            height: '7%',
                            borderRadius: '50%',
                            margin: '20px',
                            cursor: 'pointer',
                        }}
                    />
                    <Box sx={{ marginTop: '16px' }}>
                        <Typography sx={{ fontWeight: 700 }}>User</Typography>
                        <Box display={'flex'}>
                            <Typography sx={{ fontSize: '14px' }}>@nikname</Typography>
                            <Typography
                                sx={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    paddingInline: '4px',
                                    background: theme.palette.colorBox,
                                    borderRadius: '6px',
                                    paddingTop: '3px',
                                }}
                            >
                                Follows you
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Button
                    variant="outlined"
                    style={buttonStyles}
                    onClick={handleButtonClick}
                >
                    {isFollowing ? 'Following' : 'Unfollow'}
                </Button>
            </Box>
    );
};

export default Following;