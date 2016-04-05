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
/**
  @preserve Copyright (c) 2016 Ben Ilegbodu.
  Licensed under the MIT License (MIT).
  See: https://github.com/benmvp/url-lib.
  Adapted from the UIZE JavaScript Framework.
*/
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    }
    else {
        window.domInfo.getStyle = factory();
    }
})(function() {
    'use strict';

    /**
    * Returns the computed value (or values) of the specified style property (or properties) for the specified DOM node
    * @property {HTMLElement} node - the DOM Node from which to retrieve style info
    * @property {string|string[]} - the name of the style property (or list of style properties) to retrieve
    * @returns computed value (or values) style properties
    */
    function getStyle(node, property) {
        var propertyIsString = typeof property === 'string',
            value = propertyIsString ? '' : {};

        if (node) {
            if (propertyIsString) {
                // When property is a string, just grab the computed style and the value of the property
                value = window.getComputedStyle(node)[property];
            }
            else if (Array.isArray(property)) {
                // When property is an array just loop through the names and call `getStyle` recursively
                property.forEach(function(name) {
                    value[name] = getStyle(node, name);
                });
            }
        }

        return value;
    }

    return getStyle;
});
