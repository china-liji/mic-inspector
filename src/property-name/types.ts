import { InlineComponentProps } from 'mic-global';
import { DescriptorNameType } from '../named-descriptor/types';

/**
 * Property name type
 */
export type PropertyNameType = string | symbol | number;

/**
 * Property name props interface
 */
export interface PropertyNameProps extends InlineComponentProps<'name' | 'type'> {
  /**
   * No any children
   */
  children?: never[];

  /**
   * A boolean represents whether the font color should be dimmed
   */
  dimmed?: boolean;

  /**
   * Property name
   */
  name: PropertyNameType;

  /**
   * A string represents the separator between property name and property value, default value is ':'
   */
  separator?: string;

  /**
   * Property name type, only for query this component in css.
   */
  type?: DescriptorNameType;
}