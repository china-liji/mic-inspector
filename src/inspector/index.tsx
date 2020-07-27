import React from 'react';
import { InspectorProps } from './types';
import { useStyles } from './use-styles';
import { BlockComponent } from 'mic-global';
import { Property } from '../property';

/**
 * Inspector
 * @param param0 InspectorProps
 */
export function Inspector({ className, name, data, isNonenumerable, ...props }: InspectorProps): React.ReactElement {
  return (
    <BlockComponent className={useStyles(className)} {...props}>{
      <Property propertyName={name} propertyValue={data} isNonenumerable={isNonenumerable} />
    }</BlockComponent>
  );
}