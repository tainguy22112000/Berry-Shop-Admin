import { grey } from '@mui/material/colors';

export const stylesButton = {
  primaryColor: {
    color: grey[900],
  },
  button: {
    // marginLeft: '10px',
    height: 40,
    backgroundColor: grey[900],
    border: '1px solid',
    borderColor: grey[900],
    ':hover': {
      backgroundColor: grey[900],
      border: '1px solid',
      borderColor: grey[900],
      opacity: 0.8,
    },
  },
  cancel: {
    border: '1px solid ',
    borderColor: grey[900],
    color: grey[900],
    ':hover': {
      backgroundColor: '#fff',
      borderColor: grey[900],
      opacity: 0.8,
    },
  },
  // alert: {
  //   display: 'flex',
  //   transition: 'all 2s ease-in-out',
  // },
};