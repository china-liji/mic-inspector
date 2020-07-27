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
   * An object as the owner that has these properties
   */
  owner: ReferenceTypes;

  /**
   * A boolean represents whether display mode of object properties is preview
   */
  preview?: boolean;
}