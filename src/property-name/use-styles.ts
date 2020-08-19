import { EM } from 'mic-global';
import { createPropertyComponentStyles } from '../locale';
import { ClassName } from '../types';

export const useStyles = createPropertyComponentStyles(
  ClassName.PropertyName,
  {
    '& > q': {
      quotes: 'none',
      marginRight: EM.S5,
    },
  }
);