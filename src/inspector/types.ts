import { BlockComponentProps } from 'mic-global';
import { PropertyNameType } from '../property-name/types';
import { PropertyValueType } from '../property-value/types';

/**
 * Inspector props interface
 */
export interface InspectorProps extends BlockComponentProps<'name' | 'value'> {
  /**
   * No any children
   */
  children?: never[];

  /**
   * A boolean represents whether this property should be expand by default
   */
  defaultExpand?: boolean;

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