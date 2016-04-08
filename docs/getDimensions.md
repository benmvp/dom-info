# `getDimensions`

Gets the computed pixel dimensions for the specified DOM node, including `padding`, `border`, and optionally `margin`.

## Syntax

`object = getDimensions(node: HTMLElement, includeMargins?: bool)`

## Examples

```js
var getDimensions = require('dom-info/getDimensions');

var node = document.getElementById('node'),
    dimensions = getDimensions(node);
```

The above code will return an object with `width`/`height` properties that contain numeric values, representing the rendered dimensions of `node` in pixel. An example would be: `{width: 25, height: 33}`.

### Including margins

By default, the dimensions returned by `getDimensions` do not include any margins set on the DOM node. To factor in the margins into the calculation, specify `true` for the optional 2nd `includeMargins` parameter:

```js
var getDimensions = require('dom-info/getDimensions');

var node = document.getElementById('node'),
    dimensions = getDimensions(node, true);
```

The above code will return a similar object with `width`/`height` properties for `node`, but will also factor in the computed values for `marginLeft`/`marginRight` (`width`) & `marginTop`/`marginBottom` (`height`).

###### NOTES

The implementation does a simple `parseFloat` on the computed styles to convert unit-containing string values (e.g. `'25px'`) to unit-less numeric values (e.g. `25`). As such, including the margin values only works for margins set in pixels. Using `getDimensions` with margin values set with other units (such as `em`) will result in incorrect calculations.
