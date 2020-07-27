import React, { ReactElement } from 'react';
import { NamedDescriptor } from '../named-descriptor';
import { GetterValue } from '../getter-value';
import { ObjectValue } from '../object-value';
import { StringValue } from '../string-value';
import { UnknownValue } from '../unknown-value';
import { NumberValue } from '../number-value';
import { UnknownObject } from 'mic-global';

/**
 * A method to render the property value
 * @param propertyDescriptor The property descriptor
 * @param preview A boolean represents whether display mode of object properties are preview
 */
export const renderValue = (propertyDescriptor: NamedDescriptor, preview = false): ReactElement => {
  const { get, owner } = propertyDescriptor;

  // if get accessor existed
  if (get) {
    return <GetterValue owner={owner} value={get} />;
  }

  const { value } = propertyDescriptor;

  switch (typeof value) {
    case 'number':
      return <NumberValue value={value} />;

    case 'string':
      return <StringValue value={value} />;

    case 'object':
      if (value) {
        return <ObjectValue preview={preview} value={value as UnknownObject} />;
      }

      break;
  }

  return <UnknownValue value={value} />;
};