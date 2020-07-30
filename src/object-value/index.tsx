import React, { useMemo } from 'react';
import { ObjectValueProps } from './types';
import { useStyles } from './use-styles';
import { renderObjectSubs, useArrayInfo, Node, getObjectName } from './locale';
import { PropertyValue } from '../property-value';

/**
 * Object value
 * @param param0 ObjectValueProps
 */
export function ObjectValue({ className, value, preview, maxPropertyLength, ...props }: ObjectValueProps): React.ReactElement {
  const [arraylike, length] = useArrayInfo(value);
  const isNode = value ? value instanceof Node : false;

  const name = useMemo((): string => {
    return getObjectName(value, isNode);
  }, [value]);

  return (
    <PropertyValue
      className={useStyles(className)}
      data-node={isNode}
      data-preview={!!preview}
      data-arraylike={arraylike}
      data-array-length={length}
      {...props}
    >
      <span>
        {name}
        {arraylike ? <i>({length})</i> : null}
      </span>
      <q>{
        preview || isNode ?
          (
            arraylike || isNode ?
              '' :
              '...'
          ) :
          renderObjectSubs(value, arraylike, maxPropertyLength)
      }</q>
    </PropertyValue>
  );
}