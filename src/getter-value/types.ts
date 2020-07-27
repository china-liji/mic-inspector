import { PropertyValueProps, PropertyValueType } from '../property-value/types';

/**
 * Getter status
 */
export enum GetterStatus {
  /**
   * Protected status
   */
  Protected,

  /**
   * Opened status
   */
  Opened,

  /**
   * Unexpected status
   */
  Unexpected
}

/**
 * Getter method interface
 */
export interface Getter<T = PropertyValueType> {
  (): T;
}

/**
 * Getter value props interface
 */
export interface GetterValueProps extends PropertyValueProps {
  /**
   * No any children
   */
  children?: never[];

  /**
   * The object to be used as the 'this' in getter method
   */
  owner: unknown;

  /**
   * A getter method
   */
  value: Getter;
}