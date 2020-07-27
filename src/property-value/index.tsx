import React from 'react';
import { InlineComponent } from 'mic-global';
import { PropertyValueProps } from './types';
import { useStyles } from './use-styles';

/**
 * Property value
 * @param param0 PropertyValueProps
 */
export function PropertyValue({ className, value, ...props }: PropertyValueProps): React.ReactElement {
  // do nothing, only for ignore the tslint rule - 'value' is defined but never used
  void value;

  return (
    <InlineComponent className={useStyles(className)} {...props} />
  );
}