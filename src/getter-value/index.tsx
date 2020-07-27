import React, { useState } from 'react';
import { DescriptorValueType } from '../named-descriptor/types';
import { useStyles } from './use-styles';
import { NamedDescriptor } from '../named-descriptor';
import { renderGetterContent } from './locale';
import { PropertyValue } from '../property-value';
import { GetterStatus, GetterValueProps } from './types';
import { PropertyValueType } from '@/property-value/types';

/**
 * Getter type value that's one type of property value types
 * @param param0 GetterValueProps
 */
export function GetterValue({ className, owner, value, ...props }: GetterValueProps): React.ReactElement {
  const [status, setStatus] = useState(GetterStatus.Protected);
  const [descriptor, setDescriptor] = useState<NamedDescriptor>();

  const onAccess = (): void => {
    let returnValue: PropertyValueType;
    let status: GetterStatus;

    try {
      returnValue = value.call(owner) as PropertyValueType;
      status = GetterStatus.Opened;
    }
    catch(e) {
      returnValue = `${e instanceof Error && e.stack ? e.stack : e as string}`;
      status = GetterStatus.Unexpected;
    }

    setDescriptor(
      new NamedDescriptor(owner, '', returnValue, DescriptorValueType.Normal)
    );

    setStatus(status);
  };

  return (
    <PropertyValue className={useStyles(className)} {...props} data-status={status}>
      {renderGetterContent(status, descriptor, onAccess)}
    </PropertyValue>
  );
}