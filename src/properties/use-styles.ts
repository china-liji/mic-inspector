import { createStyles, EM } from 'mic-global';

export const useStyles = createStyles(
  'properties',
  {
    width: '100%',
    paddingLeft: EM.M1,
    '&, & > span': {
      display: 'block',
    },
    '& > span[data-expandable="true"]': {
      marginLeft: `-${EM.M1}`,
    },
  }
);