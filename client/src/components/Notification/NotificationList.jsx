import { Box,Typography,Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { notificationsDataSelector } from '../../redux/selectors';
import { NotificationItem } from "./NotificationItem";


export function NotificationsList(){
const NotificationList =useSelector(notificationsDataSelector);

console.log(NotificationList);

    if(!NotificationList){
        return(
            <Box>
                    <Avatar variant="square" sx={{ width: '100%', height: '100px', marginTop: '20px', marginBottom: '50px' }} src='../../imgNotifications/verification-check.png' />
                    <Typography mb={2} sx={{ fontSize: '28px', fontWeight: '900', margin: '20px' }}>
                        Nothing to see here — yet
                    </Typography>
            </Box>

        )
        
    }

    return(
        <Box>
            {NotificationList.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification} 
        />
      ))}

        </Box>
    )
}