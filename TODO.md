# Feature updates for [`dom-info`](https://github.com/benmvp/dom-info)

Please use this document as a place to float new ideas. Please be as specific with the API as possible.

## TODO

### Utilities from [UIZE](http://www.uize.com/)

(in somewhat priority order)

- `getCoords` - gets the coordinates of a DOM node, relative to the document or view port
  - Returns `x`, `y`, `top`, `left`, `bottom` & `right` properties
  - See [`Uize.Web.prototype.coords`](http://www.uize.com/reference/Uize.Web.html#6_25)
- `isVisible` - gets whether or not the DOM node is "visible"
  - See the `seen` property from [`Uize.Dom.Pos.getCoords`](http://www.uize.com/reference/Uize.Dom.Pos.html#2_3)
- `getOffset` - gets the coordinates of a DOM node relative to its offset parent
  - See [`Uize.Web.prototype.offset`](http://www.uize.com/reference/Uize.Web.html#6_86)
- `getOffsetParent` - gets the closest ancestor of a DOM node that is positioned (absolutely or relatively)
  - See [`Uize.Web.prototype.offsetParent`](http://www.uize.com/reference/Uize.Web.html#6_87)
- `getEventCoords` - gets the coordinates of a DOM event, relative to the document
  - See [`Uize.Dom.Pos.getEventAbsPos`](http://www.uize.com/reference/Uize.Dom.Pos.html#2_6)
- `getAbsolutePos` - gets the coordinates needed to position a DOM node adjacent to target coordinates such that it will always be within the viewport
  - API: `object = getAbsolutePos(node: DOMNode, targetCoords: obj, coordMargin: [obj|Number])`
  - See [`Uize.Dom.Pos.setAbsPos`](http://www.uize.com/reference/Uize.Dom.Pos.html#2_7)
- `getAbsolutePosAdjacent` - gets the coordinates needed to position a DOM node adjacent to a target DOM node will always be within the viewport
  - API: `object = getAbsolutePosAdjacent(node: DOMNode, targetNode: DOMNode, pivotAxis: ['x'|'y'])`
  - See [`Uize.Dom.Pos.setAbsPosAdjacentTo`](http://www.uize.com/reference/Uize.Dom.Pos.html#2_8)

### Other utility ideas

- `supportsTag` - returns whether or not the specified `tagName` is supported by the browser
  - Most useful for new HTML5 tags like `<svg>`, `<video>`, etc.
  - Similar in interface to `supportsStyle`

-----

## Done

- [`getStyle`](docs/getStyle.md)
- [`supportsStyle`](docs/supportsStyle.md)
- [`getDimensions`](docs/getDimensions.md)
