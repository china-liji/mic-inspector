import { PropertyValueProps } from '../property-value/types';

/**
 * Number radix
 */
export enum Radix {
  Binary = 2,

  Octal = 8,

  Decimal = 10,

  Hex = 16
}

/**
 * Number value props interface
 */
export interface NumberValueProps extends PropertyValueProps {
  /**
   * No any children
   */
  children?: never[];

  /**
   * A specific number radix
   */
  radix?: Radix;

  /**
   * The number value
   */
  value: number;
}