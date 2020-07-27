import { createStyles, EM } from 'mic-global';
import { GetterStatus } from './types';

export const useStyles = createStyles(
  'getter-value',
  {
    [`&[data-status='${GetterStatus.Protected}'] > button`]: {
      padding: 0,
      margin: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      letterSpacing: EM.S2,
      '&:hover': {
        textDecoration: 'underline',
      },
      '& > span': {
        fontWeight: 'bold',
      },
    },
    [`&[data-status='${GetterStatus.Unexpected}'] > q`]: {
      quotes: 'none',
    },
  }
);