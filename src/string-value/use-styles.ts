import { createStyles } from 'mic-global';
import { ClassName } from '../types';

export const useStyles = createStyles(
  ClassName.StringValue,
  {
    '& > q': {
      quotes: 'none',
    },
    '& > span': {
      color: '#c41a16',
    },
  }
);