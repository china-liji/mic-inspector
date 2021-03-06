import { createStyles, Black } from 'mic-global';
import { ClassName } from '../types';

export const useStyles = createStyles(
  ClassName.DomInspector,
  {
    '& li[role="treeitem"]': {
      color: `${Black.L5} !important`,
      backgroundColor: 'transparent !important',
    },
  }
);