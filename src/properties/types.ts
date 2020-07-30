import { ReferenceTypes, InlineComponentProps } from 'mic-global';

/**
 * Properties props interface
 */
export interface PropertiesProps extends InlineComponentProps {
  /**
   * No any children
   */
  children?: never[];

  /**
   * An object that provides the properties to inspect
   */
  owner: ReferenceTypes;

  /**
   * A boolean represents whether enable the preview mode.
   * In preview mode, the property can not expand and show sub properties of an object
   */
  preview?: boolean;
}