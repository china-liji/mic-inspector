import { PropertyValueType, PropertyValueProps } from '../property-value/types';

/**
 * Unknown value props interface
 */
export interface UnknownValueProps extends PropertyValueProps {
  /**
   * No any children
   */
  children?: never[];

  /**
   * A specific property value
   */
  value: PropertyValueType;
}

/**
 * Setter method interface
 */
export interface Setter<T = unknown> {
  (value: T): void;
}