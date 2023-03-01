import { grey } from '@mui/material/colors';

export const styles = {
  primaryColor: {
    color: grey[900],
  },
  button: {
    height: 40,
    width: 120,
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
};
