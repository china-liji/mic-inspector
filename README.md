# `Mic-Inspector`
A `react` inspector which a most similar of `Chorme DevTools` inspector.

## Installation
```sh
# Yarn
yarn add mic-inspector

# NPM
npm install mic-inspector
```

## Usage

### <DomInspector />
```jsx
import { DomInspector } from 'mic-inspector';

<DomInspector dom={document} />;
```

### <Inspector />
```jsx
import { Inspector } from 'mic-inspector';

const obj = { a: 1, b: 2, get self() { return obj; } };

<Inspector name='document' value={document} />;
<Inspector name='object' value={obj} />;
```

