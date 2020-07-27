import { createStyles } from 'mic-global';

export const useStyles = createStyles(
  'string-value',
  {
    '& > q': {
      quotes: 'none',
    },
    '& > span': {
      color: '#c41a16',
    },
  }
);