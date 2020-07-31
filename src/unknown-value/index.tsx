import React from 'react';
import { UnknownValueProps } from './types';
import { PropertyValue } from '../property-value';
import { useStyles } from './use-styles';
import { isObjectOrFunction } from '../property-value/locale';
import { NumberValue } from '@/number-value';
import { ObjectValue } from '@/object-value';
import { StringValue } from '@/string-value';
import { UnknownObject } from 'mic-global';
import { ObjectValue as ReactInspectorObjectValue } from 'react-inspector';

/**
 * Unknown value
 * @param param0 UnknownValueProps
 */
export function UnknownValue({ className, value, ...props }: UnknownValueProps): React.ReactElement {
  const ps = {
    className: useStyles(className),
    ...(
      isObjectOrFunction(value) ?
        {} :
        { title: `${value as string}` }
    ),
    ...props,
  };

  switch (typeof value) {
    case 'number':
      return <NumberValue value={value} {...ps} />;

    case 'string':
      return <StringValue value={value} {...ps} />;

    case 'object':
      if (value) {
        return <ObjectValue value={value as UnknownObject} {...ps} />;
      }

      break;
  }

  return (
    <PropertyValue {...ps}>
      <ReactInspectorObjectValue object={value} />
    </PropertyValue>
  );
}