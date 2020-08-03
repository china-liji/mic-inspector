# `Mic-Inspector`
A `react` inspector which a most similar of `Chorme DevTools` inspector.

Here is a [demo](https://china-liji.github.io/mic-books/#/mic/mic-inspector/readme) that you can inspect something by this component.

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
* [&lt;Inspector /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/inspector)
* [&lt;DomInspector /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/dom-inspector)
* [&lt;Properties /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/properties)
* [&lt;Property /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/property)
* [&lt;PropertyName /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/property-name)
* [&lt;PropertyValue /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/property-value)
* [&lt;GetterValue /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/getter-value)
* [&lt;NumberValue /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/number-value)
* [&lt;ObjectValue /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/object-value)
* [&lt;StringValue /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/string-value)
* [&lt;UnknownValue /&gt;](https://china-liji.github.io/mic-books/#/mic/mic-inspector/unknown-value)
