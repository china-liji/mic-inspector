import { BlockComponentProps } from 'mic-global';
import { NamedDescriptor } from '../named-descriptor';
import { PropertyNameType } from '../property-name/types';
import { PropertyValueType } from '../property-value/types';

/**
 * Object props interface
 */
export interface ObjectProps {}

/**
 * Describable object props interface
 */
export interface DescribableObjectProps extends ObjectProps {
  /**
   * Property descriptor
   */
  propertyDescriptor: NamedDescriptor;

  /**
   * Property name
   */
  propertyName: PropertyNameType;

  /**
   * Property value
   */
  propertyValue: PropertyValueType;
}

/**
 * Undescribable object props interface
 */
export interface NondescribableObjectProps extends ObjectProps {
  /**
   * A boolean represents whether the object property is non-enumerable
   */
  isNonenumerable?: boolean;
}

/**
 * Inspector props interface
 */
export interface InspectorProps extends BlockComponentProps<'name' | 'data'>, NondescribableObjectProps {
  /**
   * No any children
   */
  children?: never[];

  /**
   * A string represents the displayed name
   */
  name: PropertyNameType;

  /**
   * Inspected data
   */
  data: PropertyValueType;
}