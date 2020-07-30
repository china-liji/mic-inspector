import React, { useState } from 'react';
import { PropertyProps, NondescribablePropertyProps, DescribablePropertyProps } from './types';
import { renderValue } from './locale';
import { useStyles } from './use-styles';
import { isObjectOrFunction } from '../property-value/locale';
import { NamedDescriptor } from '../named-descriptor';
import { DescriptorValueType } from '../named-descriptor/types';
import { PropertyName } from '../property-name';
import { ReferenceTypes, InlineComponent } from 'mic-global';
import { Properties } from '../properties';

/**
 * Object Proeprty
 * @param props PropertyProps
 */
export function Property(props: PropertyProps): React.ReactElement {
  const [expand, setExpand] = useState(false);
  const { className, preview, isNonenumerable, name, value, ...ps } = props as NondescribablePropertyProps;

  const {
    descriptor = new NamedDescriptor(null, name, value, DescriptorValueType.Normal, !isNonenumerable),
    ...p
  } = ps as PropertyProps as DescribablePropertyProps;

  const { fullname, nameType, value: descValue, enumerable } = descriptor;
  const expandable = !preview && isObjectOrFunction(descValue);

  const onToggle = (): void => {
    setExpand(!expand);
  };

  return (
    <InlineComponent
      className={useStyles(className)}
      data-expand={expand}
      data-expandable={expandable}
      {...p}
    >
      <q onClick={onToggle}>
        <PropertyName name={fullname} type={nameType} dimmed={!enumerable} />
        {renderValue(descriptor, preview)}
      </q>
      {
        expandable && expand ?
          <Properties owner={descValue as ReferenceTypes} preview={preview} /> :
          null
      }
    </InlineComponent>
  );
}