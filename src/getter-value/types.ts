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
   * An event triggered by click this component.
   * @param status Getter status
   * @param returnedValue The returned value or unexcepted error string
   * @param getter The getter method
   * @param owner A specific object that will be used as the 'this' in the getter method
   */
  onAccess?(status: GetterStatus, returnedValue: PropertyValueType, getter: Getter, owner: unknown): void;

  /**
   * A specific object that will be used as the 'this' in the getter method
   */
  owner: unknown;

  /**
   * A specific method that will be called by click this component, and display the returned value
   */
  value: Getter;
}