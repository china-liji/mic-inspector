import { InlineComponentProps } from 'mic-global';
import { DescribableObjectProps, NondescribableObjectProps } from '../inspector/types';

/**
 * Property props
 */
export type PropertyProps = PropertyOwnProps & (DescribableObjectProps | NondescribableObjectProps);

/**
 * Property own props interface
 */
export interface PropertyOwnProps extends InlineComponentProps {
  /**
   * No any children
   */
  children?: never[];
  
  /**
   * A boolean represents whether display mode of object properties is preview
   */
  preview?: boolean;
}