import React, { useState } from 'react';
import { DescribableObjectProps, NondescribableObjectProps } from '../inspector/types';
import { PropertyProps, PropertyOwnProps } from './types';
import { renderValue } from './locale';
import { useStyles } from './use-styles';
import { isObjectOrFunction } from '../property-value/locale';
import { NamedDescriptor } from '../named-descriptor';
import { DescriptorValueType } from '../named-descriptor/types';
import { PropertyName } from '../property-name';
import { ReferenceTypes, InlineComponent } from 'mic-global';
import { Properties } from '../properties';

/**
 * Proeprty
 * @param props PropertyProps
 */
export function Property(props: PropertyProps): React.ReactElement {
  const [expand, setExpand] = useState(false);

  const {
    className,
    preview,
    isNonenumerable,
    propertyName,
    propertyValue,
    propertyDescriptor = new NamedDescriptor(null, propertyName, propertyValue, DescriptorValueType.Normal, !isNonenumerable),
    ...ps
  } = props as PropertyOwnProps & DescribableObjectProps & NondescribableObjectProps;

  const { fullname, nameType, value, enumerable } = propertyDescriptor;
  const expandable = !preview && isObjectOrFunction(value);

  const onToggle = (): void => {
    setExpand(!expand);
  };

  return (
    <InlineComponent
      className={useStyles(className)}
      data-expand={expand}
      data-expandable={expandable}
      {...ps}
    >
      <q onClick={onToggle}>
        <PropertyName name={fullname} type={nameType} dimmed={!enumerable} />
        {renderValue(propertyDescriptor, preview)}
      </q>
      {
        expandable && expand ?
          <Properties owner={value as ReferenceTypes} preview={preview} /> :
          null
      }
    </InlineComponent>
  );
}