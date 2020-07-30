import { createStyles, EM } from 'mic-global';
import { ClassName } from '../types';

export const useStyles = createStyles(
  ClassName.Properties,
  {
    width: '100%',
    paddingLeft: EM.M1,
    '&, & > span': {
      display: 'block',
    },
    [`& > .${ClassName.Property}[data-expandable="true"]`]: {
      marginLeft: `-${EM.M1}`,
    },
  }
);