import React, { ReactElement, useMemo } from 'react';
import { getNamedDescriptors } from '../named-descriptor/locale';
import { InlineComponent } from 'mic-global';
import { useStyles } from './use-styles';
import { Property } from '../property';
import { NamedDescriptor } from '../named-descriptor';
import { PropertiesProps } from './types';

/**
 * Property list
 * @param param0 PropertiesProps
 */
export function Properties({ className, preview, owner, ...props }: PropertiesProps): ReactElement {
  const descriptors = useMemo((): NamedDescriptor[] => {
    return getNamedDescriptors(owner);
  }, [owner]);

  return (
    <InlineComponent className={useStyles(className)} {...props}>{
      descriptors.map((descriptor: NamedDescriptor, index: number): ReactElement => {
        return <Property key={index} descriptor={descriptor} preview={preview} />;
      })
    }</InlineComponent>
  );
}