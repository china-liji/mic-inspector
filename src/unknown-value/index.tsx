import React from 'react';
import { UnknownValueProps } from './types';
import { ObjectValue } from 'react-inspector';
import { PropertyValue } from '../property-value';
import { useStyles } from './use-styles';
import { isObjectOrFunction } from '../property-value/locale';

/**
 * Unknown value
 * @param param0 UnknownValueProps
 */
export function UnknownValue({ className, value, ...props }: UnknownValueProps): React.ReactElement {
  const p = {} as UnknownValueProps;

  if (!isObjectOrFunction(value)) {
    p.title = value?.toString();
  }

  return (
    <PropertyValue className={useStyles(className)} {...p} {...props}>
      <ObjectValue object={value} />
    </PropertyValue>
  );
}