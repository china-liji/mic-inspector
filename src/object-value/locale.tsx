import React, { ReactElement, useMemo } from 'react';
import { ReferenceTypes, UnknownObject } from 'mic-global';
import { DescriptorValueType, DescriptorNameType } from '../named-descriptor/types';
import { NamedDescriptor } from '../named-descriptor';
import { Property } from '../property';
import { ObjectValueSeparator, ObjectValueType } from './types';
import { getNamedDescriptors } from '../named-descriptor/locale';
import { isObjectOrFunction } from '../property-value/locale';

export const { Object, Node } = window;

export const arraylikeMethodNames = [...(!window.Symbol ? [] : [window.Symbol]), 'entries', 'forEach', 'item', 'keys', 'split', 'values'];

/**
 * Returns a string represents object name
 * @param value An object
 * @param isNode A boolean represents whether the object is a node
 */
export const getObjectName = (value: UnknownObject, isNode: boolean): string => {
  // if the object is a node 
  if (isNode) {
    try {
      const nodeName = (value as Node).nodeName.toLocaleLowerCase();

      return nodeName[0] === '#' ? nodeName.substring(1) : nodeName;
    }
    catch(e) {}
  }

  const constructor = value?.constructor;
  
  return constructor === Object && value !== Object.prototype ? '' : constructor?.name;
};

/**
 * A method to fitler object subs
 * @param param0 A descriptor of the object
 * @param arraylike A boolean represents whether the object is an array
 */
export const objectSubsFilter = ({ get, set, nameType, valueType, value, enumerable }: NamedDescriptor, arraylike: boolean): boolean => {
  // if the object is an array
  if (arraylike) {
    return (nameType & DescriptorNameType.Index) === DescriptorNameType.Index;
  }

  // if the accessors existed
  if (get || set) {
    return false;
  }

  switch (true) {
    case (valueType & DescriptorValueType.Normal) === DescriptorValueType.Normal:
    case (valueType & DescriptorValueType.Result) === DescriptorValueType.Result:
      break;

    default:
      return false;
  }

  return !isObjectOrFunction(value) || enumerable;
};

/**
 * A method to render object subs
 * @param object The object value
 * @param arraylike A boolean represents whether the object is an array
 * @param maxPropertyLength A number represents the length of object properties to preview
 */
export const renderObjectSubs = (object: ReferenceTypes, arraylike: boolean, maxPropertyLength = 5): ReactElement[] => {
  const objectSubs = [] as ReactElement[];
  
  // for each descriptors
  for (const descriptor of getNamedDescriptors(object)) {
    const { length } = objectSubs;

    // if the length is greater than maxPropertyLength * 2
    if (length >= maxPropertyLength * 2) {
      break;
    }

    // if descriptor has filtered
    if (!objectSubsFilter(descriptor, arraylike)) {
      continue;
    }

    objectSubs.push(
      <Property key={length} descriptor={descriptor} preview />,
      <i key={length + 1} data-separator={ObjectValueSeparator.Comma}>,</i>
    );
  }

  // if the length of subs is less than maxPropertyLength * 2
  if (objectSubs.length < maxPropertyLength * 2) {
    // remove the last one that the comma element
    objectSubs.splice(objectSubs.length - 1, 1);
  }
  else {
    objectSubs.push(
      <i key={objectSubs.length + 1} data-separator={ObjectValueSeparator.Spread}>...</i>
    );
  }

  return objectSubs;
};

/**
 * Get the array info
 * @param value An object that maybe is an array
 */
export const useArrayInfo = (value: ObjectValueType): [boolean, number] => {
  return useMemo((): [boolean, number] => {
    tryBlock:
    try {
      // if the object is an array
      if (Array.isArray(value)) {
        break tryBlock;
      }

      // the the length property in the object
      if ('length' in value) {
        // for each array method names
        for (const name of arraylikeMethodNames as string[]) {
          // if this method is a function
          if (typeof value[name] === 'function') {
            break tryBlock;
          }
        }
      }
  
      return [false, 0];
    }
    catch(e) {}

    let length = 0;

    try {
      length = (value as unknown[]).length;
    }
    catch(e) {}

    return [true, length];
  }, [value]);
};