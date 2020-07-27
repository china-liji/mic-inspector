import { PropertyValueProps } from '../property-value/types';

/**
 * String value props interface
 */
export interface StringValueProps extends PropertyValueProps {
  /**
   * A string represents the end tag of this string value
   */
  after?: string;

  /**
   * A string represents the start tag of this string value
   */
  before?: string;

  /**
   * No any children
   */
  children?: never[];

  /**
   * A specific string
   */
  value: string;
}