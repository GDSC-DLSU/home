import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function PrivacyConsentDialog({ open, onAgree, onClose }) {
  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title">
        Data Privacy Content Waiver
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
        In compliance with the Data Privacy Act (DPA) of 2012, and its Implementing Rules and Regulations (IRR) effective since September 9, 2016, I allow Google Developer Student Clubs - De La Salle University to store and use my data for the purpose and execution of this initiative and other purposes stated within the document.<br />
          As such, I agree and authorize the members to:<br />
          1. Use my personal data for documentation purposes.<br />
          2. Store the physical/electronic copy of my personal data at their principal office/online database.<br />
          3. I understand and am assured that necessary precautions will be taken to protect my personal information.<br />
          4. I also acknowledge that I have attained the consent from all parties relevant to this consent.<br />
        </Typography>
        <Typography gutterBottom>
          By clicking "Agree", you consent to the processing of your personal data
          in accordance with our privacy policy. Please review the policy carefully
          before proceeding.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onClose} color="secondary">
          Disagree
        </Button>
        <Button onClick={onAgree} color="primary">
          Agree
        </Button>
      </DialogActions>
    </BootstrapDialog>
  );
}
