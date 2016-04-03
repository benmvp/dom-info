# dom-info

[![version](https://img.shields.io/npm/v/dom-info.svg?style=flat-square)](http://npm.im/dom-info)
[![Build Status](https://travis-ci.org/benmvp/dom-info.svg?branch=master)](https://travis-ci.org/benmvp/dom-info)
[![Dependencies status](https://img.shields.io/david/benmvp/dom-info.svg?style=flat-square)](https://david-dm.org/benmvp/dom-info#info=dependencies)
[![Dev Dependencies status](https://img.shields.io/david/dev/benmvp/dom-info.svg?style=flat-square)](https://david-dm.org/benmvp/dom-info#info=devDependencies)
[![downloads](https://img.shields.io/npm/dt/dom-info.svg?style=flat-square)](http://npm-stat.com/charts.html?package=dom-info&from=2016-03-27)
[![Maintenance Status](https://img.shields.io/badge/status-maintained-brightgreen.svg)](https://github.com/benmvp/dom-info/pulse)
[![license](https://img.shields.io/npm/l/dom-info.svg?style=flat-square)](http://spdx.org/licenses/MIT)

A jQuery-alternative for retrieving info about rendered DOM nodes.

## Background

Most UI frameworks provide a mechanism for maintaining state, so we no longer need to store state in the DOM like we did when all we had was [jQuery](https://jquery.com/). Furthermore, with modern UI libraries such as [React](https://facebook.github.io/react/), we also no longer need to manually update DOM nodes because we can re-render the entire DOM as a function of the updated state.

As a result, DOM libraries like jQuery, [zepto.js](http://zeptojs.com/), and others others feel even more bloated because they are filled with methods we no longer need. The only functions we do need are those that retrieve properties of DOM nodes that are the _result_ of their render in the browser (e.g. dimensions, positions, etc.). These properties cannot be known prior to rendering.

`dom-info`, derived from various modules in the the open-source [UIZE JavaScript Framework](https://github.com/UIZE/UIZE-JavaScript-Framework), is a lightweight alternative that **only** provides these utility functions. These functions are separated into individual modules so you can only include the ones you need.

## Installation

Install via [NPM](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm install --save dom-info
```

Use with [webpack](https://webpack.github.io/) or [browserify](http://browserify.org/):

```js
import * as domnInfo from 'dom-info'; // ES6+
var domnInfo = require('dom-info'); // ES5-
```

As a last resort, you can download [`dist/dom-info.min.js`](https://raw.githubusercontent.com/benmvp/dom-info/master/dist/dom-info.min.js) (or just [`dist/dom-info-core.min.js`](https://raw.githubusercontent.com/benmvp/dom-info/master/dist/dom-info-core.min.js)) and include it on your web page via a `<script>` tag. It will create a global `window.domnInfo` object (or define the module if you are using [RequireJS](http://requirejs.org/)):

```html
<script src="/lib/dom-info.min.js" type="text/javascript"></script>
```

## API Docs

Coming soon...

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## Project philosophy

We take the stability of this utility package **very** seriously. `dom-info` follows the [SemVer](http://semver.org/) standard for versioning. All updates must also keep the library lightweight.

## License

[MIT](LICENSE). Copyright (c) 2016 Ben Ilegbodu.
