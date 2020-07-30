import { createStyles, EM } from 'mic-global';
import { DescriptorNameType } from '../named-descriptor/types';
import { ObjectValueSeparator } from './types';
import { ClassName } from '../types';

export const useStyles = createStyles(
  ClassName.ObjectValue,
  {
    '&[data-arraylike="true"]': {
      ['&[data-array-length="0"] > span > i']: {
        display: 'none',
      },
      [`& .${ClassName.PropertyName}[data-type$='${DescriptorNameType.Index.toString(2)}']`]: {
        display: 'none',
      },
      '& > span > i': {
        fontStyle: 'normal',
      },
      '& > q': {
        '&::before': {
          content: '"["',
        },
        '&::after': {
          content: '"]"',
        },
      },
    },
    '&[data-node="true"]': {
      '& > span': {
        color: '#881391',
      },
      '& > q': {
        display: 'none',
      },
    },
    '&:not([data-node="true"]) > span:not(:empty)': {
      marginRight: EM.S5,
    },
    '& > q': {
      '&:empty': {
        maxWidth: 'none',
        overflow: 'visible',
        letterSpacing: EM.S2,
      },
      '&::before': {
        content: '"{"',
      },
      '&::after': {
        content: '"}"',
      },
      '& > i': {
        [`&[data-separator="${ObjectValueSeparator.Comma}"]`]: {
          marginRight: EM.S5,
        },
      },
    },
    [`& .${ClassName.PropertyName} > span`]: {
      color: 'inherit !important',
    },
    [`& .${ClassName.Property}`]: {
      display: 'inline',
      maxWidth: 'none',
    },
  }
);