import React, { useState } from 'react';
import { NumberValueProps, Radix } from './types';
import { useStyles } from './use-styles';
import { PropertyValue } from '../property-value';
import { toNumberString, radixCircle } from './locale';

/**
 * Number value
 * @param param0 NumberValueProps
 */
export function NumberValue({ value, className, radix = Radix.Decimal, ...props }: NumberValueProps): React.ReactElement {
  const title = toNumberString(value, radix);
  const [valueString, setValueString] = useState(title);
  const [currentRadix, setCurrentRadix] = useState(radix);

  const onClick = ({ altKey, metaKey }: React.MouseEvent<HTMLSpanElement>): void => {
    // if not press the alt key or meta key
    if (!altKey && !metaKey) {
      return;
    }

    const r = radixCircle[radixCircle.indexOf(currentRadix) + 1];

    setValueString(
      toNumberString(value, r)
    );

    setCurrentRadix(r);
  };

  return (
    <PropertyValue
      className={useStyles(className)}
      title={title}
      onClick={onClick}
      {...props}
    >
      {valueString}
    </PropertyValue>
  );
}