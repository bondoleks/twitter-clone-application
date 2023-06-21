import React from 'react';
import { Tooltip, Box, IconButton, Grid } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Following from '../../components/Follower/Following';

const Follower = () => {

    return (

        <Box display={'flex'} alignItems={'center'}>
            <Following showBorder={false} />
            <Tooltip title="More">
                <IconButton color='gray'>
                    <MoreHorizIcon  fontSize="medium" />
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default Follower;



// import React from 'react';
// import { Typography, Box, Button } from '@mui/material';
// import Avatar from '@mui/material/Avatar';
// import { useTheme } from '@mui/material/styles';


// const Follower = () => {

//     const theme = useTheme();

//     const ButtonStyles = {
//         backgroundColor: theme.palette.background.default,
//         color: theme.palette.text.primary,
//         borderColor: theme.palette.text.primary
//       };

//     return (
//         <>
//             <Box display={'flex'} alignItems={'center'}>
//                 <Box display={'flex'} >
//                     <Avatar
//                         alt="User Avatar"
//                         src='../../img/avatar.png'

//                         sx={{
//                             width: '7%',
//                             height: '7%',
//                             borderRadius: '50%',
//                             margin: '20px',
//                             cursor: 'pointer'
//                         }}
//                     />
//                     <Box sx={{ marginTop: '16px' }}>
//                         <Typography sx={{ fontWeight: 700 }}>User</Typography>
//                         <Box display={'flex'}>
//                             <Typography sx={{ fontSize: '14px' }}>@nikname</Typography>
//                             <Typography sx={{
//                                 fontSize: '10px',
//                                 marginLeft: '8px',
//                                 paddingInline: '4px',
//                                 background: theme.palette.colorBox,
//                                 borderRadius: '6px',
//                                 paddingTop: '3px'
//                             }}>
//                                 Follows you
//                             </Typography>
//                         </Box>
//                     </Box>
//                 </Box>
//                 <Button variant="outlined" style={ButtonStyles} sx={{
//                     textTransform: 'none',
//                     borderRadius: '16px',
//                     marginRight: '8px'
//                 }}>
//                     Following
//                 </Button>
//             </Box>
//         </>

//     )
// }

// export default Follower