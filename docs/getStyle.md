# `getStyle`

Returns the value of the specified style property (or style properties) for the specified node.

## Syntax

`string = getStyle(propertyName: string, node: HTMLElement)`

`object = getStyle(propertyNameList: string[], node: HTMLElement)`

## Examples

### Single property

When a single CSS property is needed, you can simply pass the property name:

```js
var getStyle = require('dom-info/getStyle');

var node = document.getElementById('node'),
    marginTop = getStyle('marginTop', node);
```

With the above code, `marginTop` would be a string such as: `'20px'`.

_NOTE:_ The CSS property must use the camelCase syntax (e.g. `marginTop`) provided by the DOM API and not the hyphen snake case syntax (e.g. `margin-top`) used in CSS.

_NOTE:_ `getStyle` also automatically retrieves vendor-prefixed properties (such as [CSS3 transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)). Just specify the standards name (e.g. `'transition'`) and if that's not found, it will search the vendor-prefixed versions (e.g. ``webkitTransition`, `mozTransition`, etc.).

### Multiple properties

`getStyle` also supports specifying multiple CSS properties as an `Array`. In this variation, an object lookup mapping property names to property values is returned.

```js
var getStyle = require('dom-info/getStyle');

var node = document.getElementById('node'),
    properties = getStyle(['marginTop', 'color', 'flex'], node);
```

With the above code, `properties` would be an object such as: `{marginTop: '20px', color: '#ffffff', flex: '0 0 12rem'}`.

_NOTE:_ The CSS property must use the camelCase syntax (e.g. `marginTop`) provided by the DOM API and not the hyphen snake case syntax (e.g. `margin-top`) used in CSS.

_NOTE:_ `getStyle` also automatically retrieves vendor-prefixed properties (such as [CSS3 transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)). Just specify the standards name (e.g. `'transition'`) and if that's not found, it will search the vendor-prefixed versions (e.g. ``webkitTransition`, `mozTransition`, etc.).
