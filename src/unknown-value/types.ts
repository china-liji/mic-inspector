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
   * Any type data that you want to inspect
   */
  value: PropertyValueType;
}

/**
 * Setter method interface
 */
export interface Setter<T = unknown> {
  (value: T): void;
}