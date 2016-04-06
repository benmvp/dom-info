/**
  @preserve Copyright (c) 2016 Ben Ilegbodu.
  Licensed under the MIT License (MIT).
  See: https://github.com/benmvp/dom-info.
  Adapted from the UIZE JavaScript Framework.
*/
(function(factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define(
            [
                './supportsStyle',
                './getStyle'
            ],
            factory
        );
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = factory(
            require('./supportsStyle'),
            require('./getStyle')
        );
    }
    else {
        window.domInfo = {};
    }
})(function(supportsStyle, getStyle) {
    'use strict';

    return {
        supportsStyle: supportsStyle,
        getStyle: getStyle
    };
});
