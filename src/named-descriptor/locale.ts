import { DescriptorNameType, DescriptorValueType } from './types';
import { PropertyNameType } from '../property-name/types';
import { ReferenceTypes, UnknownObject } from 'mic-global';
import { NamedDescriptor } from '.';

const PROTO = '__proto__';

const { Number } = window;

const { get: prototypeGetter } = Object.getOwnPropertyDescriptor(Object.prototype, PROTO) || {};

/**
 * Get the name type of the property
 * @param name Property name
 */
export const getNameType = (name: PropertyNameType): DescriptorNameType => {
  // if the name type is 'symbol'
  if (typeof name === 'symbol') {
    return DescriptorNameType.Symbol;
  }

  const number = Number.parseInt(name as string);

  // if the name type is not 'number'
  if (Number.isNaN(number)) {
    return DescriptorNameType.String;
  }

  return (
    // if the names are same that represents the type of number is int
    number.toString() === name ? DescriptorNameType.Int : DescriptorNameType.Float
  ) | (
    // if the number is 0
    number === 0 ?
      DescriptorNameType.Zero :
      (
        // if the number is greater than 0
        number > 0 ?
          DescriptorNameType.Positive :
          DescriptorNameType.Negative
      )
  );
};

/**
 * A method to sort the descriptors
 * @param descriptor1 Property descriptor
 * @param descriptor2 Another property descriptor
 */
export const sortNamedDescriptors = (descriptor1: NamedDescriptor, descriptor2: NamedDescriptor): 1 | -1 => {
  const { name: n1, valueType: v1 } = descriptor1;
  const { name: n2, valueType: v2 } = descriptor2;

  // if the name of the first one is number
  if (!Number.isNaN(+n1.toString())) {
    // if the name of the second one is number too
    if (!Number.isNaN(+n2.toString())) {
      return n1 as number - (n2 as number) < 0 ? -1 : 1;
    }

    // insert the descriptor1 before descriptor2
    return -1;
  }
  // if the name of the second one is number
  else if(!Number.isNaN(+n2.toString())) {
    // insert the descriptor2 before descriptor1
    return 1;
  }

  // if the first one is __proto__
  if (n1 === PROTO) {
    // insert the descriptor2 before descriptor1
    return 1;
  }
  // if the second one is __proto__
  else if (n2 === PROTO) {
    // insert the descriptor1 before descriptor2
    return -1;
  }

  // if the first one is enumerable
  if (descriptor1.enumerable) {
    // if the second one is 'not' enumerable
    if (!descriptor2.enumerable) {
      // insert the descriptor1 before descriptor2
      return -1;
    }
  }
  // if the second one is enumerable
  else if (descriptor2.enumerable) {
    // insert the descriptor2 before descriptor1
    return 1;
  }

  // if the first one is an accessor
  if ((v1 & DescriptorValueType.Accessor) === DescriptorValueType.Accessor) {
    // if the second one is 'not' an accessor
    if ((v2 & DescriptorValueType.Accessor) !== DescriptorValueType.Accessor) {
      // insert the descriptor2 before descriptor1
      return 1;
    }

    // if the names are same
    if (n1 === n2) {
      // if the first one is a getter, then insert the descriptor1 before descriptor2
      return (v1 & DescriptorValueType.Getter) === DescriptorValueType.Getter ? -1 : 1;
    }
  }
  // if the second one is an accessor
  else if ((v2 & DescriptorValueType.Accessor) === DescriptorValueType.Accessor) {
    // insert the descriptor1 before descriptor2
    return -1;
  }

  // sorted by name
  return (n1 as string) > (n2 as string) ? 1 : -1;
};

/**
 * Get the sorted named descriptors of the specific property value
 * @param propertyValue Property value
 * @param owner An object as the owner that has these descriptors
 */
export const getNamedDescriptors = (propertyValue: ReferenceTypes, owner = propertyValue): NamedDescriptor[] => {
  const prototype = Object.getPrototypeOf(propertyValue) as UnknownObject | null;
  const names = Object.getOwnPropertyNames(propertyValue);
  const descriptors = [] as NamedDescriptor[];

  // for each names
  for (const name of names) {
    const descriptor = Object.getOwnPropertyDescriptor(propertyValue, name);

    // if no descriptor
    if (!descriptor) {
      continue;
    }

    const { value, get, set, enumerable, configurable } = descriptor as NamedDescriptor;

    // if accessor existed
    if (get || set) {
      // if getter existed
      if (get) {
        try {
          // if the name is not '__proto__' or the getter is not the getter of object prototype
          if (name !== PROTO || get !== prototypeGetter) {
            descriptors.push(
              new NamedDescriptor(
                owner,
                name,
                get.call(owner),
                DescriptorValueType.Result,
                enumerable,
                configurable
              )
            );
          }
        }
        catch(e) {
          descriptors.push(
            new NamedDescriptor(owner, name, get, set, enumerable, configurable)
          );
        }

        descriptors.push(
          new NamedDescriptor(owner, name, get, DescriptorValueType.Getter, false, true)
        );
      }

      if (set) {
        descriptors.push(
          new NamedDescriptor(owner, name, set, DescriptorValueType.Setter, false, true)
        );
      }

      continue;
    }

    descriptors.push(
      new NamedDescriptor(owner, name, value, DescriptorValueType.Normal, enumerable, configurable)
    );
  }

  // if prototype is existed
  if (prototype) {
    // for each descriptors of the prototype
    for (const descriptor of getNamedDescriptors(prototype, owner)) {
      const { name, valueType } = descriptor;

      // if the name included by names or the name is '__proto__'
      if (names.includes(name as string) || name === PROTO) {
        continue;
      }

      // if the value type is not DescriptorValueType.Result
      if ((valueType & DescriptorValueType.Result) !== DescriptorValueType.Result) {
        continue;
      }

      descriptors.push(descriptor);
    }

    descriptors.push(
      new NamedDescriptor(propertyValue, PROTO, prototype, DescriptorValueType.Normal, false)
    );
  }

  // return a list after sort these descriptors
  return descriptors.sort(sortNamedDescriptors);
};