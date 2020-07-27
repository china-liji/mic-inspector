import React from 'react';
import { StringValueProps } from './types';
import { useStyles } from './use-styles';
import { PropertyValue } from '../property-value';

/**
 * String value
 * @param param0 StringValueProps
 */
export function StringValue({ after = '"', before = '"', value, className, ...props }: StringValueProps): React.ReactElement {
  return (
    <PropertyValue className={useStyles(className)} title={value} {...props}>
      <q>{before}</q>
      <span>{value}</span>
      <q>{after}</q>
    </PropertyValue>
  );
}