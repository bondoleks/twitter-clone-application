import { Box ,Typography} from '@mui/material';
import Footerlogin from '../components/Footerlogin/Footerlogin';
import { ListMainPage } from '../components/MainPage/ListMainPage';
import { ModalNonAutorizate } from '../components/ModalOmMainPage/ModalNonAutorizate/ModalNonAutorizate';
import { LogingModal } from '../components/ModalOmMainPage/Login/LogingModal';
import { RegistrationModal } from '../components/ModalOmMainPage/Registration/RegistrationModal';
import { useSelector } from 'react-redux';

export const MainPage = () => {
    const isAuthenticated = useSelector(state => state.user.authorized);

    return (
            <Box sx={{ width: '100%', borderRight: '1px rgb(239, 243, 244) solid', borderLeft: '1px rgb(239, 243, 244) solid' }}>
      <Box sx={{ position: 'sticky', top: 0, backgroundColor: 'rgba(255, 255, 255,0.7)', zIndex: 1 }}>
        <Typography sx={{ fontSize: 18, fontWeight: 700, py: 2, px: 4 , fontFamily: 'Roboto' }}>
            Twitter-clone
        </Typography>
      </Box>  
            <ListMainPage/>
            <ModalNonAutorizate/>
            <LogingModal/>
            <RegistrationModal/>
            {!isAuthenticated && <Footerlogin />}
        </Box>
    )
}

