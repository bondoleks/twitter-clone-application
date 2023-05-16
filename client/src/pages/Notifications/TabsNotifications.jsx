import React from 'react';
import { Typography, Tab, Tabs } from '@mui/material';
import { TabPanel, TabContext } from '@mui/lab';
import { Avatar } from '@mui/material';
import Box from '@mui/material/Box';

export const TabsNotifications = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs variant="fullWidth" value={value} onChange={handleChange} indicatorColor="primary">
                <Tab label="All" sx={{ textTransform: 'none' }}></Tab>
                <Tab label="Verified" sx={{ textTransform: 'none' }}></Tab>
                <Tab label="Mentions" sx={{ textTransform: 'none' }}></Tab>
            </Tabs>

            <TabContext value={value}>
                <TabPanel value={0} index={0}>
                    <Typography mb={2} sx={{ fontSize: '20px', fontWeight: '900' }}></Typography>
                </TabPanel>
                <TabPanel value={1} index={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', margin: '0 auto' }}>
                    <Avatar variant="square" sx={{ width: '100%', height: '100px', marginTop: '20px', marginBottom: '50px' }} src='../../imgNotifications/verification-check.png' />
                    <Typography mb={2} sx={{ fontSize: '28px', fontWeight: '900', margin: '20px' }}>
                        Nothing to see here — yet
                    </Typography>
                    <Typography variant="body1" sx={{ margin: '20px' }}>
                        Likes, mentions, Retweets, and a whole lot more — when it comes from a verified account, you’ll find it here.
                        <Typography
                            sx={{
                                fontWeight: 700,
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                '&:hover': {
                                    textDecoration: 'underline',
                                    textDecorationThickness: '2px',
                                },
                            }}>
                            Learn more
                        </Typography>
                    </Typography>
                </TabPanel>
                <TabPanel value={2} index={2} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px', margin: '0 auto' }}>
                    <Box>
                        <Typography mb={2} sx={{ fontSize: '28px', fontWeight: '900', margin: '20px' }}>
                            Nothing to see here — yet
                        </Typography>
                        <Typography variant="body1">When someone mentions you, you’ll find it here.</Typography>
                    </Box>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabsNotifications;