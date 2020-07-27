import React, { useMemo } from 'react';
import { ObjectName as ObjName } from 'react-inspector';
import { InlineComponent } from 'mic-global';
import { useStyles } from './use-styles';
import { PropertyNameProps } from './types';
import { getNameType } from '../named-descriptor/locale';
import { DescriptorNameType } from '../named-descriptor/types';

/**
 * Property name
 * @param param0 PropertyNameProps
 */
export function PropertyName({ className, name, type, dimmed, ...props }: PropertyNameProps): React.ReactElement {
  const nameString = name.toString();
  
  const currentType = useMemo((): DescriptorNameType => {
    return type ? type : getNameType(nameString);
  }, [type, nameString]);

  return (
    <InlineComponent
      className={useStyles(className)}
      title={nameString}
      data-type={currentType.toString(2)}
      {...props}
    >
      <ObjName name={nameString} dimmed={dimmed} />
      <q>:</q>
    </InlineComponent>
  );
}