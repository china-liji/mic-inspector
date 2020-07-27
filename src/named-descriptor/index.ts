import { DescriptorNameType, DescriptorValueType } from './types';
import { getNameType } from './locale';
import { PropertyNameType } from '../property-name/types';
import { PropertyValueType } from '../property-value/types';
import { Getter } from '../getter-value/types';
import { Setter } from '../unknown-value/types';

/**
 * Named property descriptor
 */
export class NamedDescriptor<T = PropertyValueType> implements PropertyDescriptor {
  /**
   * A boolean represents whether the property is configurable
   */
  configurable: boolean;

  /**
   * A boolean represents whether the property is enumerable
   */
  enumerable: boolean;

  /**
   * A string represents the full name of this property
   */
  fullname: string;

  /**
   * A method for get the property value
   */
  get: Getter<T> | undefined;

  /**
   * Property name
   */
  name: PropertyNameType;

  /**
   * Property name type
   */
  nameType: DescriptorNameType;

  /**
   * An object as the owner that has the property
   */
  owner: unknown;

  /**
   * A method for set the property value
   */
  set: Setter<T> | undefined;

  /**
   * Property value
   */
  value: T | undefined;

  /**
   * Property value type
   */
  valueType: DescriptorValueType;

  /**
   * Named property descriptor
   * @param owner An object as the owner that has the property
   * @param name Property name
   * @param value Property value
   * @param valueType Property value type
   * @param enumerable A boolean represents whether the property is enumerable
   * @param configurable A boolean represents whether the property is configurable
   */
  constructor(owner: unknown, name: PropertyNameType, value: T, valueType: DescriptorValueType, enumerable?: boolean, configurable?: boolean)
  /**
   * Named property descriptor
   * @param owner An object as the owner that has the property
   * @param name Property name
   * @param get A method for get the property value
   * @param set A method for set the property value
   * @param enumerable A boolean represents whether the property is enumerable
   * @param configurable A boolean represents whether the property is configurable
   */
  constructor(owner: unknown, name: PropertyNameType, get: Getter<T> | undefined, set: Setter<T> | undefined, enumerable?: boolean, configurable?: boolean)
  constructor(owner: unknown, name: PropertyNameType, arg1: T | Getter<T> | undefined, arg2?: DescriptorValueType | Setter<T> | undefined, enumerable = true, configurable = true) {
    this.owner = owner;
    this.name = name;
    this.fullname = name.toString();
    this.nameType = getNameType(name);
    this.enumerable = enumerable;
    this.configurable = configurable;

    // if the property has accessor
    if (typeof arg1 === 'function' && typeof arg2 !== 'number') {
      this.value = void 0;
      this.get = arg1 as Getter<T>;
      this.set = arg2 as Setter<T>;
      this.valueType = DescriptorValueType.Normal;
      return;
    }

    const vt = arg2 as DescriptorValueType;

    // if the property value type is a getter
    if ((vt & DescriptorValueType.Getter) === DescriptorValueType.Getter) {
      this.fullname = `get ${this.fullname}`;
    }
    // if the property value type is a setter
    else if ((vt & DescriptorValueType.Setter) === DescriptorValueType.Setter) {
      this.fullname = `set ${this.fullname}`;
    }

    this.value = arg1 as T;
    this.get = this.set = void 0;
    this.valueType = vt;
  }
}