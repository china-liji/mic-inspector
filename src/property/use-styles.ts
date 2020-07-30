import { Gray, Percent, EM, Style } from 'mic-global';
import { createPropertyComponentStyles } from '../locale';
import { ClassName } from '../types';

export const useStyles = createPropertyComponentStyles(
  ClassName.Property,
  {
    width: Percent.M1,
    display: 'block',
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
      '&[data-expand="true"] > q': {
        '&::before': {
          transform: 'rotateZ(90deg) translateY(-5%)',
        },
        [`& > .${ClassName.ObjectValue}`]: {
          '&[data-arraylike="true"][data-array-length="0"] > span > i': {
            display: 'inline',
          },
          '& > q': {
            display: 'none',
          },
        },
      },
    },
    '& > q': {
      quotes: 'none',
    },
  }
);