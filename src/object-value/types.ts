import { PropertyValueProps } from '../property-value/types';
import { UnknownObject } from 'mic-global';

/**
 * Object value separator
 */
export enum ObjectValueSeparator {
  Comma,

  Spread
}

/**
 * Object value type
 */
export type ObjectValueType = UnknownObject | unknown[];

/**
 * Object value props interface
 */
export interface ObjectValueProps extends PropertyValueProps {
  /**
   * No any children
   */
  children?: never[];

  /**
   * A number represents the length of object properties to preview
   */
  maxPropertyLength?: number;
  
  /**
   * A boolean represents whether the object display mode is preview
   */
  preview?: boolean;

  /**
   * The object value
   */
  value: ObjectValueType;
}