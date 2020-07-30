import { InlineComponentProps } from 'mic-global';
import { PropertyNameType } from '@/property-name/types';
import { PropertyValueType } from '@/property-value/types';
import { NamedDescriptor } from '@/named-descriptor';

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
   * Property descriptor
   */
  descriptor?: unknown;

  /**
   * Property name
   */
  name?: unknown;

  /**
   * Property value
   */
  value?: unknown;
  
  /**
   * A boolean represents whether display mode of object properties is preview
   */
  preview?: boolean;
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