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
                './getStyle',
                './getDimensions'
            ],
            factory
        );
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = factory(
            require('./supportsStyle'),
            require('./getStyle'),
            require('./getDimensions')
        );
    }
    else {
        window.domInfo = {};
    }
})(function(supportsStyle, getStyle, getDimensions) {
    'use strict';

    return {
        supportsStyle: supportsStyle,
        getStyle: getStyle,
        getDimensions: getDimensions
    };
});
