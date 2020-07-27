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
}

/**
 * Undescribable object props interface
 */
export interface UndescribableObjectProps extends ObjectProps {
  /**
   * A boolean represents whether the object property is non-enumerable
   */
  isNonenumerable?: boolean;

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
 * Inspector props interface
 */
export interface InspectorProps extends BlockComponentProps, UndescribableObjectProps {
  /**
   * No any children
   */
  children?: never[];
}