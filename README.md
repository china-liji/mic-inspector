# `Mic-Inspector`
A `react` inspector which a most similar of `Chorme DevTools` inspector.

Here is a [demo](https://china-liji.github.io/mic-books/#/mic-inspector/readme?lang=en-us) that you can inspect something by this component.

### Installation
```sh
# Yarn
yarn add mic-inspector

# NPM
npm install mic-inspector
```

### Usage
```jsx
// Object inspector
import { Inspector } from 'mic-inspector';

const obj = { a: 1, b: 2, get self() { return obj; } };

<Inspector name='document' value={document} />;
<Inspector name='object' value={obj} />;


// DOM inspector
import { DomInspector } from 'mic-inspector';

<DomInspector dom={document} />;
```

### Components
* [&lt;Inspector /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/inspector?lang=en-us)
* [&lt;DomInspector /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/dom-inspector?lang=en-us)
* [&lt;Properties /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/properties?lang=en-us)
* [&lt;Property /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/property?lang=en-us)
* [&lt;PropertyName /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/property-name?lang=en-us)
* [&lt;PropertyValue /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/property-value?lang=en-us)
* [&lt;GetterValue /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/getter-value?lang=en-us)
* [&lt;NumberValue /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/number-value?lang=en-us)
* [&lt;ObjectValue /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/object-value?lang=en-us)
* [&lt;StringValue /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/string-value?lang=en-us)
* [&lt;UnknownValue /&gt;](https://china-liji.github.io/mic-books/#/mic-inspector/unknown-value?lang=en-us)
