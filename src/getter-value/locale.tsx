import React from 'react';
import { GetterStatus } from './types';
import { NamedDescriptor } from '../named-descriptor';
import { renderValue } from '../property/locale';

/**
 * A method to render content components
 * @param status Getter status
 * @param descriptor Getter descriptor
 * @param onAccess An event that will be triggered by click the getter
 */
export const renderGetterContent = (status: GetterStatus, descriptor: NamedDescriptor | undefined, onAccess: VoidFunction): React.ReactElement => {
  switch (status) {
    case GetterStatus.Opened:
      return renderValue(descriptor as NamedDescriptor);

    case GetterStatus.Protected:
      return (
        <button onClick={onAccess}>
          (<span>...</span>)
        </button>
      );
  }

  const exception = `[Exception: ${descriptor?.value as string}]`;

  return <q title={exception}>{exception}</q>;
};