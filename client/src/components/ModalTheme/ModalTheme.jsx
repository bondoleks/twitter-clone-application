import React from 'react';
import { Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Button } from '@mui/material';

 export const ThemeDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Select Theme</DialogTitle>
      <DialogContent>
        {/* Content of the dialog */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ThemeDialog;