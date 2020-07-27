import React, { useMemo } from 'react';
import { ObjectValueProps } from './types';
import { useStyles } from './use-styles';
import { useStyles as usePropertyStyles } from '../property/use-styles';
import { useStyles as usePropertyNameStyles } from '../property-name/use-styles';
import { renderObjectSubs, useArrayInfo, Node, getObjectName } from './locale';
import { PropertyValue } from '../property-value';

/**
 * Object value
 * @param param0 ObjectValueProps
 */
export function ObjectValue({ className, value, preview, maxPropertyLength, ...props }: ObjectValueProps): React.ReactElement {
  const [arrayLike, length] = useArrayInfo(value);
  const isNode = value ? value instanceof Node : false;

  const name = useMemo((): string => {
    return getObjectName(value, isNode);
  }, [value]);

  return (
    <PropertyValue
      className={
        useStyles(
          [
            usePropertyStyles(),
            usePropertyNameStyles(),
          ],
          className
        )
      }
      data-node={isNode}
      data-preview={!!preview}
      data-array-like={arrayLike}
      {...props}
    >
      <span>{name + (arrayLike && length ? `(${length})` : '')}</span>
      <q>{
        preview || isNode ?
          (
            arrayLike || isNode ?
              '' :
              '...'
          ) :
          renderObjectSubs(value, arrayLike, maxPropertyLength)
      }</q>
    </PropertyValue>
  );
}