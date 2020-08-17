import React from 'react';
import { DOMInspector } from 'react-inspector';
import { BlockComponent } from 'mic-global';
import { DomInspectorProps } from './types';
import { useStyles } from './use-styles';

/**
 * Dom inspector
 * @param param0 DomInspectorProps
 */
export function DomInspector({ className, dom, expandLevel, ...props }: DomInspectorProps): React.ReactElement {
  return (
    <BlockComponent className={useStyles(className)} {...props}>{
      <DOMInspector data={dom} expandLevel={expandLevel} />
    }</BlockComponent>
  );
}