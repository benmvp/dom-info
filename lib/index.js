/**
  @preserve Copyright (c) 2016 Ben Ilegbodu.
  Licensed under the MIT License (MIT).
  See: https://github.com/benmvp/url-lib.
  Adapted from the UIZE JavaScript Framework.
*/
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(
            [
                './getStyle'
            ],
            factory
        );
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = factory(
            require('./getStyle')
        );
    }
    else {
        window.domInfo = {};
    }
})(function(getStyle) {
    'use strict';

    return {
        getStyle: getStyle
    };
});
