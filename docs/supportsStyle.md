# `supportsStyle`

Returns whether or not the specified CSS property is supported in the current browser.

Use this function instead of user-agent sniffing to determine if a given CSS property is supported by the browser. If the browser doesn't support the specified CSS property, `undefined` is returned.

## Syntax

`string = supportsStyle(propertyName: string, node?: HTMLElement)`

## Examples

### Feature detection

In it's most simplest form, `supportsStyle` can be used as a CSS feature detector (aka a lighterweight version of [Modernizr](https://modernizr.com/)):

```js
var supportsStyle = require('dom-info/supportsStyle');

if (!supportsStyle('transition')) {
    // Do JavaScript animations
}
```

The above code tests to see whether or not the browser supports [CSS3 transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions). It uses `document.body` as the default node to test. Alternatively, you can pass in a specific node to test:

```js
var supportsStyle = require('dom-info/supportsStyle');

var node = document.getElementById('node');

if (!supportsStyle('transition', node)) {
    // Do JavaScript animations
}
```

Specifying a specific `node` is rarely necessary, but may come in handy if a specific CSS property on applies to DOM nodes of a specific type.

###### NOTE

The CSS property must use the camelCase syntax (e.g. `marginTop`) provided by the DOM API and not the hyphen snake case syntax (e.g. `margin-top`) used in CSS.

### Vendor-prefixed properties

The return value from `supportsStyle` is actually not a `boolean` but a `string` that is the name of the actual CSS property that the browser supports. This returned property may be vendor-prefixed (e.g. `webkitTransform`, `mozTransition`, etc.).

```js
var supportsStyle = require('dom-info/supportsStyle');

var transformPropertyName = supportsStyle('transform');
```

With the above code in a browser that is still using a vendor prefix for [CSS3 transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform), `transformPropertyName` would include the vendor prefix (e.g. `'mozTransform'`).

Retrieving the actual vendor-prefixed name can be helpful when you want to turn around and set the CSS property on a given node.
