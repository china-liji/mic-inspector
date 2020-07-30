import { createStyles, Black } from 'mic-global';

export const useStyles = createStyles(
  'dom-inspector',
  {
    '& li[role="treeitem"]': {
      color: `${Black.L2} !important`,
      backgroundColor: 'transparent !important',
    },
  }
);