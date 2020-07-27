import { InlineComponentProps, PrimaryTypes } from 'mic-global';

/**
 * Property value type
 */
export type PropertyValueType = PrimaryTypes;

/**
 * Property value props interface
 */
export interface PropertyValueProps extends InlineComponentProps<'value'> {
  /**
   * Property value type
   */
  value?: PropertyValueType;
}