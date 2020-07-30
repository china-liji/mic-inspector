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
   * A boolean represents whether display mode of object properties is preview
   */
  preview?: boolean;
}