import { Button, Typography, Box} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from "react-redux";
import { dataModalMainPage } from "../../../redux/selectors";
import { VisibleNoAutorizateModalSelector } from "../../../redux/selectors";
import { useDispatch } from "react-redux";
import { CloseNoAutorizateModalThunk } from "../../../redux/mainPage/CloseNoAutorizateModalThunk";
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { ModalOnMainPageWrapper } from "../ModalOnMainPageWrapper";
import { OPEN_LOGIN_MODAL,OPEN_REGISTRATION_MODAL } from "../../../redux/actions";

export function ModalNonAutorizate(){
    const {title,text,icon} = useSelector(dataModalMainPage);
    const isOpen = useSelector(VisibleNoAutorizateModalSelector);
    const dispatch = useDispatch();

    function onClose(){
        dispatch(CloseNoAutorizateModalThunk());
    }

    return(
        <ModalOnMainPageWrapper isOpen={isOpen} onClose={onClose} size={{ width: 483, height: 400 }}>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
                <Box sx={{textAlign:'center'}}>
                {icon === 'like' && <FavoriteIcon fontSize="large" sx={{m:"20px 0",color: "rgb(249, 24, 128)"}}/>}
                {icon === 'reply' && <ChatBubbleIcon fontSize="large" sx={{m:"20px 0",color:"rgb(29, 155, 240)"}}/>}
                {icon === 'retweet' && <RepeatIcon fontSize="large" sx={{m:"20px 0",color: "rgb(0, 186, 124)"}}/>}
                <Typography variant="h4">{title}</Typography>
                <Typography variant="body1" sx={{m:"20px 0"}}>{text}</Typography>
            </Box>
            <Box sx={{display:"flex",flexDirection:'column'}}>
            <Button
                            variant="contained"
                            size="small"
                            sx={{
                                background:'rgb(29, 155, 240)',
                                borderRadius: '20px',
                                fontSize: '14px',
                                color: 'white',
                                backgroundColor: '#1DA1F2',
                                marginBottom: '16px',
                                width: 300,
                                border: '1px solid rgba(255, 255, 255, 0.35)',
                                '&:hover': {
                                    backgroundColor: 'rgb(26, 140, 216)',
                                },
                            }}
                            onClick={()=>{
                                dispatch(CloseNoAutorizateModalThunk());
                                dispatch({type:OPEN_LOGIN_MODAL})
                            }}
                        >
                            Log In
                        </Button>
                        <Button
                            variant="contained"
                            size="small"
                            sx={{
                                borderRadius: '20px',
                                fontSize: '14px',
                                color: 'rgb(29, 155, 240)',
                                backgroundColor: '#fff',
                                marginBottom: 5,
                                width: 300,
                                border: '1px solid rgba(255, 255, 255, 0.35)',
                                '&:hover': {
                                    backgroundColor: 'rgba(29, 155, 240, 0.1)',
                                },
                            }}
                            onClick={()=>{
                                dispatch(CloseNoAutorizateModalThunk());
                                dispatch({type:OPEN_REGISTRATION_MODAL})
                            }}
                        >
                            Sing In
                        </Button>
            </Box>                



                </Box>
        </ModalOnMainPageWrapper>
    )

}