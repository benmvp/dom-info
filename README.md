# dom-info

[![version](https://img.shields.io/npm/v/dom-info.svg)](http://npm.im/dom-info)
[![downloads](https://img.shields.io/npm/dt/dom-info.svg)](http://npm-stat.com/charts.html?package=dom-info&from=2016-03-27)
![module formats: umds](https://img.shields.io/badge/module%20formats-umd-green.svg)
[![license](https://img.shields.io/npm/l/dom-info.svg)](http://spdx.org/licenses/MIT)

[![Maintenance Status](https://img.shields.io/badge/status-maintained-brightgreen.svg)](https://github.com/benmvp/dom-info/pulse)
[![Build Status](https://travis-ci.org/benmvp/dom-info.svg?branch=master)](https://travis-ci.org/benmvp/dom-info)
[![Coverage Status](https://coveralls.io/repos/github/benmvp/dom-info/badge.svg?branch=master)](https://coveralls.io/github/benmvp/dom-info?branch=master)
[![Dependencies status](https://img.shields.io/david/benmvp/dom-info.svg)](https://david-dm.org/benmvp/dom-info#info=dependencies)
[![Dev Dependencies status](https://img.shields.io/david/dev/benmvp/dom-info.svg)](https://david-dm.org/benmvp/dom-info#info=devDependencies)

[![Watch on GitHub](https://img.shields.io/github/watchers/benmvp/dom-info.svg?style=social)](https://github.com/benmvp/dom-info/watchers)
[![Star on GitHub](https://img.shields.io/github/stars/benmvp/dom-info.svg?style=social)](https://github.com/benmvp/dom-info/stargazers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/benmvp/dom-info.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20dom-info%20by%20%40benmvp!%0A%0Ahttps%3A%2F%2Fgithub.com%2Fbenmvp%2Fdom-info) [![Greenkeeper badge](https://badges.greenkeeper.io/benmvp/dom-info.svg)](https://greenkeeper.io/)

A jQuery-alternative for retrieving info about rendered DOM nodes.

## Background

Most UI frameworks provide a mechanism for maintaining state, so we no longer need to store state in the DOM like we did when all we had was [jQuery](https://jquery.com/). Furthermore, with modern UI libraries such as [React](https://facebook.github.io/react/), we also no longer need to manually update DOM nodes because we can re-render the entire DOM as a function of the updated state.

As a result, DOM libraries like jQuery, [zepto.js](http://zeptojs.com/), and others others feel even more bloated because they are filled with methods we no longer need. The only functions we do need are those that retrieve properties of DOM nodes that are the _result_ of their render in the browser (e.g. dimensions, positions, etc.). These properties cannot be known prior to rendering.

`dom-info`, derived from various modules in the the open-source [UIZE JavaScript Framework](https://github.com/UIZE/UIZE-JavaScript-Framework), is a lightweight alternative that **only** provides these utility functions. These functions are separated into individual modules so you can only include the ones you need.

## Installation

Install via [Yarn](https://yarnpkg.com/lang/en/docs/managing-dependencies/):

```sh
yarn add dom-info
```

Install via [NPM](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```sh
npm install --save dom-info
```

Use with [webpack](https://webpack.github.io/) or [browserify](http://browserify.org/):

```js
import * as domInfo from 'dom-info'; // ES6+
var domInfo = require('dom-info'); // ES5
```

As a last resort, you can download [`dist/dom-info.min.js`](https://raw.githubusercontent.com/benmvp/dom-info/master/dist/dom-info.min.js) and include it on your web page via a `<script>` tag. It will create a global `window.domInfo` object (or define the module if you are using [RequireJS](http://requirejs.org/)):

```html
<script src="/lib/dom-info.min.js" type="text/javascript"></script>
```

## API Docs

- [`getDimensions`](docs/getDimensions.md) - Gets the computed pixel dimensions for the specified DOM node, including `padding`, `border`, and optionally `margin`.
- [`getStyle`](docs/getStyle.md) - Returns the value of the specified style property (or style properties) for the specified node.
- [`supportsStyle`](docs/supportsStyle.md) - Returns whether or not the specified CSS property is supported in the current browser.

Check out the [docs](docs/) for more examples or [try out `dom-info` in your browser](https://tonicdev.com/npm/dom-info)!

## Browser support

`dom-info` has been tested in [Internet Explorer 9+](http://windows.microsoft.com/en-us/internet-explorer/download-ie), [Chrome](https://www.google.com/chrome/browser/desktop/), [Firefox](https://www.mozilla.org/en-US/firefox/new/), [Safari](http://www.apple.com/safari/), [Opera](http://www.opera.com/) and [Edge](https://www.microsoft.com/en-us/windows/microsoft-edge). Some functionality may also work in older browsers, but is unsupported.

## Project philosophy

We take the stability of this utility package **very** seriously. `dom-info` follows the [SemVer](http://semver.org/) standard for versioning. All updates must also keep the library lightweight by providing each piece of functionality in a separate module.

## Contributing

Contributions are welcome! See [CONTRIBUTING](CONTRIBUTING.md) for more details.

## License

[MIT](LICENSE). Copyright (c) 2016-2017 Ben Ilegbodu.
