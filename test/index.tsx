import React from 'react';
import * as ReactDOM from 'react-dom';
import { Inspector, DomInspector, Property, Properties, PropertyName, GetterValue, NumberValue, Getter, ObjectValue, PropertyValue, StringValue, UnknownValue } from '../src';
import { useAppStyles } from 'mic-global';
import { useStyles } from './use-styles';

export function Test(): React.ReactElement {
  const obj = {
    a: 1,
    b: 2,
    get self() {
      if (this === obj) {
        return obj;
      }

      throw new Error('here is an error');
    }
  };

  useAppStyles();

  return (
    <div className={useStyles()}>
      <blockquote>
        <h4>DomInspector</h4>
        <DomInspector dom={document} expandLevel={2} />
      </blockquote>
      <blockquote>
        <h4>Inspector</h4>
        <Inspector name='document' value={document} />
        <Inspector name='object' value={obj} defaultExpand />
      </blockquote>
      <blockquote>
        <h4>Properties</h4>
        <Properties owner={obj} />
      </blockquote>
      <blockquote>
        <h4>Property</h4>
        <Property name='object' value={obj} defaultExpand isNonenumerable={false} />
        <Property name='object' value={obj} separator='=' />
        <Property name='array' value={'123'.repeat(10).split('')} />
        <Property name='obj' value={{ '+': 1, 0: 0, 'a': 'a', '-1': 99 }} />
      </blockquote>
      <blockquote>
        <h4>PropertyName</h4>
        <PropertyName name='enumerable' />
        <br />
        <PropertyName name='nonenumerable' dimmed />
        <br />
        <PropertyName name='separator' separator='=' />
      </blockquote>
      <blockquote>
        <h4>PropertyValue</h4>
        <PropertyValue>This is a super component of other type values</PropertyValue>
      </blockquote>
      <blockquote>
        <h4>GetterValue</h4>
        <dl>
          <dt>GetterStatus.Protected -&gt; GetterStatus.Opened</dt>
          <dd>
            <GetterValue value={Object.getOwnPropertyDescriptor(obj, 'self')!.get as Getter} owner={obj} />
          </dd>
        </dl>
        <dl>
          <dt>GetterStatus.Protected -&gt; GetterStatus.Unexpected</dt>
          <dd>
            <GetterValue value={Object.getOwnPropertyDescriptor(obj, 'self')!.get as Getter} owner={null} />
          </dd>
        </dl>
      </blockquote>
      <blockquote>
        <h4>GetterValue</h4>
        <p>You can press the alt/cmd key and click the number to change the number radix.</p>
        <NumberValue value={255} />
      </blockquote>
      <blockquote>
        <h4>ObjectValue</h4>
        <dl>
          <dt>object - normal mode</dt>
          <dd>
            <ObjectValue value={obj} />
          </dd>
        </dl>
        <dl>
          <dt>object - preview mode</dt>
          <dd>
            <ObjectValue value={obj} preview />
          </dd>
        </dl>
        <dl>
          <dt>array - normal mode</dt>
          <dd>
            <ObjectValue value={[1, 2, 3]} />
          </dd>
        </dl>
        <dl>
          <dt>array - preview mode</dt>
          <dd>
            <ObjectValue value={[]} preview />
          </dd>
        </dl>
      </blockquote>
      <blockquote>
        <h4>StringValue</h4>
        <StringValue value={'123'.repeat(10)} />
        <br />
        <StringValue value={'123'.repeat(10)} before={'\''} after={'\''} />
        <br />
        <StringValue value={'123'.repeat(10)} before='`' after='`' />
      </blockquote>
      <blockquote>
        <h4>UnknownValue</h4>
        <UnknownValue value={obj} />
        <br />
        <UnknownValue value='abc' />
        <br />
        <UnknownValue value={123} />
        <br />
        <UnknownValue value={undefined} />
        <br />
        <UnknownValue value={true} />
        <br />
        <UnknownValue value={false} />
        <br />
        <UnknownValue value={location.reload} />
      </blockquote>
    </div>
  );
}

ReactDOM.render(
  <Test />,
  document.querySelector('body > article')
); 