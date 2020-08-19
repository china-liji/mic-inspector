import { InlineComponentProps } from 'mic-global';
import { PropertyNameType } from '../property-name/types';
import { PropertyValueType } from '../property-value/types';
import { NamedDescriptor } from '../named-descriptor';

/**
 * Property props
 */
export type PropertyProps = DescribablePropertyProps | NondescribablePropertyProps;

/**
 * Property own props interface
 */
export interface PropertyOwnProps extends InlineComponentProps<'name' | 'value'> {
  /**
   * No any children
   */
  children?: never[];

  /**
   * A boolean represents whether this property should be expand by default
   */
  defaultExpand?: boolean;

  /**
   * Property descriptor
   */
  descriptor?: unknown;

  /**
   * Property name
   */
  name?: unknown;
  
  /**
   * A boolean represents whether enable the preview mode
   * In preview mode, the property can not expand and show sub properties of an object
   */
  preview?: boolean;

  /**
   * A string represents the separator between property name and property value, default value is ':'
   */
  separator?: string;

  /**
   * Property value
   */
  value?: unknown;
}

/**
 * Nondescribable property props interface
 */
export interface NondescribablePropertyProps extends PropertyOwnProps {
  /**
   * Property descriptor
   */
  descriptor?: never;

  /**
   * A boolean represents whether the object property is non-enumerable
   */
  isNonenumerable?: boolean;

  /**
   * A specific property name to display
   */
  name: PropertyNameType;

  /**
   * Any type data that you want to inspect
   */
  value: PropertyValueType;
}

/**
 * Describable property props interface
 */
export interface DescribablePropertyProps extends PropertyOwnProps {
  /**
   * Property descriptor
   */
  descriptor: NamedDescriptor;

  /**
   * Property name
   */
  name?: never;

  /**
   * Property value
   */
  value?: never;
}