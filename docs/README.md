# API Docs

## [`getStyle`](getStyle.md)

Returns the value of the specified style property (or style properties) for the specified node.

```js
var getStyle = require('dom-info/getStyle');

var node = document.getElementById('node'),
    marginTop = getStyle(node, 'marginTop');
```

With the above code, `marginTop` would be a string such as: `'20px'`.

Read full documentation for [`getStyle`](getStyle.md).

-----
