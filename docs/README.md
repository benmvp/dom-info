# API Docs

- [`getStyle`](#getStyle)
- [`supportsStyle`](#supportsStyle)

## [`getStyle`](getStyle.md)

Returns the value of the specified style property (or style properties) for the specified node.

```js
var getStyle = require('dom-info/getStyle');

var node = document.getElementById('node'),
    marginTop = getStyle('marginTop', node);
```

With the above code, `marginTop` would be a string such as: `'20px'`.

Read full documentation for [`getStyle`](getStyle.md).

-----

## [`supportsStyle`](supportsStyle.md)

Returns whether or not the specified CSS property is supported in the current browser.

```js
var supportsStyle = require('dom-info/supportsStyle');

if (!supportsStyle('transition')) {
    // Do JavaScript animations
}
```

The above code tests to see whether or not the browser supports [CSS3 transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions).

Read full documentation for [`supportsStyle`](supportsStyle.md).
