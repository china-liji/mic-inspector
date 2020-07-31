import React from 'react';
import { ObjectValue as ReactInspectorObjectValue } from 'react-inspector';
import { PropertyValueType } from '@/property-value/types';
import { NumberValue } from '@/number-value';
import { StringValue } from '@/string-value';
import { ObjectValue } from '@/object-value';
import { UnknownObject } from 'mic-global';

export const renderContent = (value: PropertyValueType): React.ReactElement => {
  switch (typeof value) {
    case 'number':
      return <NumberValue value={value} />;

    case 'string':
      return <StringValue value={value} />;

    case 'object':
      if (value) {
        return <ObjectValue value={value as UnknownObject} />;
      }

      break;
  }

  return <ReactInspectorObjectValue object={value} />; 
};