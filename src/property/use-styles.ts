import { Gray, Percent, EM } from 'mic-global';
import { createPropertyComponentStyles } from '../locale';

export const useStyles = createPropertyComponentStyles(
  'property',
  {
    maxWidth: Percent.M1,
    display: 'inline-block',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'default',
    '&[data-expandable="true"]': {
      position: 'relative',
      paddingLeft: EM.M1,
      '& > q::before': {
        position: 'absolute',
        left: 0,
        top: 0,
        content: '"▶"',
        color: Gray.L6,
      },
      '&[data-expand="true"] > q::before': {
        transform: 'rotateZ(90deg)',
      },
    },
    '& > q': {
      quotes: 'none',
    },
  }
);