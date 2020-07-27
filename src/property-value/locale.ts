import { PropertyValueType } from './types';
import { NamedDescriptor } from '../named-descriptor';

/**
 * Return a boolean represents whether the property value is an object or a function
 * @param propertyValue Property value
 * @param descriptor Property decsriptor
 */
export const isObjectOrFunction = (propertyValue: PropertyValueType, descriptor?: NamedDescriptor): boolean => {
  // if descriptor existed
  if (descriptor) {
    // if the get accessor existed
    if (descriptor.get) {
      return false;
    }

    propertyValue = descriptor.value;
  }

  switch (typeof propertyValue) {
    case 'string':
    case 'boolean':
    case 'number':
    case 'symbol':
    case 'bigint':
    case 'undefined':
      return false;
  }

  return propertyValue !== null;
};