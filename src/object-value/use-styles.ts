import { createStyles, EM, Style } from 'mic-global';
import { DescriptorNameType } from '../named-descriptor/types';
import { ObjectValueSeparator } from './types';

export const useStyles = createStyles(
  'object-value',
  ([property, propertyName]: [string, string]): Style => {
    return {
      '&[data-array-like="true"]': {
        [`& .${propertyName}[data-type$='${DescriptorNameType.Index.toString(2)}']`]: {
          display: 'none',
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
      [`& .${propertyName} > span`]: {
        color: 'inherit !important',
      },
      [`& .${property}`]: {
        display: 'inline',
        maxWidth: 'none',
      },
    };
  }
);