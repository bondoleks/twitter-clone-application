import { Hidden,Modal,Box,Typography } from "@mui/material";



export function ModalOnMainPageWrapper({children, isOpen,onClose,size}){
const {width,height} = size;

    return(
        <>
            <Hidden smDown>
                <Modal open={isOpen} 
                    onClose={onClose} 
                    aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
                    >
                    <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: `${width}px`,
                                height: `${height}px`,
                                bgcolor: '#fff',
                                color: '#000',
                                borderRadius: 5,
                                boxShadow: 24,
                                p: 4,
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                    }}>
                        <Typography
                            onClick={onClose}
                            sx={{
                                position: 'absolute',
                                lineHeight: '18px',
                                left: 20,
                                top: 12,
                                fontSize: 14,
                                borderRadius: '50%',
                                cursor: 'pointer',
                                padding: '6px',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            X
                        </Typography>
                        {children}
                    </Box>            
                </Modal>        
            </Hidden>
            <Hidden smUp>
                <Modal open={isOpen} 
                    onClose={onClose} 
                    aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                    <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '100%',
                                height: '100%',
                                bgcolor: '#fff',
                                color: '#000',
                                p: 4,
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'    
                    }}>
                        <Typography
                            onClick={onClose}
                            sx={{
                                position: 'absolute',
                                lineHeight: '18px',
                                left: 20,
                                top: 12,
                                fontSize: 14,
                                borderRadius: '50%',
                                cursor: 'pointer',
                                padding: '6px',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                },
                            }}
                        >
                            X
                        </Typography>
                        {children}
                    </Box>            
                </Modal> 
            </Hidden>
        </>

    )
}