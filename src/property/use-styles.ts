import { Gray, Percent, EM } from 'mic-global';
import { createPropertyComponentStyles } from '../locale';

export const useStyles = createPropertyComponentStyles(
  'property',
  {
    width: Percent.M1,
    display: 'block',
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
        transform: 'translateY(-5%)',
      },
      '&[data-expand="true"] > q::before': {
        transform: 'rotateZ(90deg) translateY(-5%)',
      },
    },
    '& > q': {
      quotes: 'none',
    },
  }
);