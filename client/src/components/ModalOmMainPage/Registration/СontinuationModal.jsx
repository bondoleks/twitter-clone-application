import { Paper, Typography,Modal, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { VisibleNextRegistrationModalSelector } from "../../../redux/selectors";



export function СontinuationModal({email,closeModal}){
    const visibleNextModal = useSelector(VisibleNextRegistrationModalSelector);
return(
    <Modal open={visibleNextModal} onClose={closeModal}         
    aria-labelledby="child-modal-title"
    aria-describedby="child-modal-description">
        <Paper sx={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            gap:'12px',
            p:'16px 12px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: `250px`,
            height: `250px`,
            bgcolor: '#fff',
            color: '#000',
            borderRadius: 5,
            boxShadow: 24,}}>
            <Typography>Congratulations!</Typography>
            <Typography sx={{textAlign:'center'}}>Registration is almost complete, go to your mail {email}</Typography>
            <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{
                    borderRadius: '20px',
                    fontSize: '14px',
                    color: 'white',
                    backgroundColor: '#1DA1F2',
                    border: '1px solid rgba(255, 255, 255, 0.35)',
                    '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color:'#1DA1F2'
                    }}}
            onClick={closeModal}
            > Ok</Button>
        </Paper>
    </Modal>
)
}