import React from 'react';
import SidebarDesktop from './SidebarDesktop';
import SidebarMedium from './SidebarMedium';
import SidebarMobile from './SidebarMobile';
import Hidden from '@mui/material/Hidden';


export const Sidebar = () => {
    return (
        <>
            <Hidden xlUp mdDown>
                <SidebarDesktop />
            </Hidden>
            <Hidden mdUp smDown>
                <SidebarMedium />
            </Hidden>
            <Hidden smUp>
                <SidebarMobile />
            </Hidden>
        </>
    )
}

export default Sidebar