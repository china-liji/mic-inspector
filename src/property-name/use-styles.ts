import { EM } from 'mic-global';
import { createPropertyComponentStyles } from '../locale';
import { ClassName } from '../types';

export const useStyles = createPropertyComponentStyles(
  ClassName.PropertyName,
  {
    '& > q': {
      quotes: 'none',
      margin: [0, EM.S4],
    },
    '&[data-separator=":"] > q': {
      marginLeft: 0,
    },
  }
);