import { createStyles, EM, Percent } from 'mic-global';
import { ClassName } from '../types';

export const useStyles = createStyles(
  ClassName.Properties,
  {
    width: Percent.M1,
    paddingLeft: EM.M1,
    boxSizing: 'border-box',
    '&, & > span': {
      display: 'block',
    },
    [`& > .${ClassName.Property}[data-expandable="true"]`]: {
      marginLeft: `-${EM.M1}`,
    },
  }
);