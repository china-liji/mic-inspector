import { EM } from 'mic-global';
import { createPropertyComponentStyles } from '../locale';

export const useStyles = createPropertyComponentStyles(
  'property-name',
  {
    '& > q': {
      quotes: 'none',
      marginRight: EM.S4,
    },
  }
);