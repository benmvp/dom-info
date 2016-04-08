/**
  @preserve Copyright (c) 2016 Ben Ilegbodu.
  Licensed under the MIT License (MIT).
  See: https://github.com/benmvp/dom-info.
  Adapted from the UIZE JavaScript Framework.
*/
(function(factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define(['./supportsStyle'], factory);
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('./supportsStyle'));
    }
    else {
        window.domInfo.getStyle = factory(window.domInfo.supportsStyle);
    }
})(function(supportsStyle) {
    'use strict';

    /**
    * Returns the computed value (or values) of the specified style property (or properties) for the specified DOM node
    * @param {string|string[]} propertyName - the name of the style property (or list of style properties) to retrieve
    * @param {HTMLElement} node - the DOM Node from which to retrieve style info
    * @returns computed value (or values) style properties
    */
    function getStyle(propertyName, node) {
        var propertyIsString = typeof propertyName === 'string',
            value = propertyIsString ? '' : {};

        if (node && node !== window) {
            if (propertyIsString) {
                // When property is a string, just grab the value of the property from the computed style
                // Uses `supportsStyle` to get the vendor-prefixed propertyName when applicable
                value = window.getComputedStyle(node)[
                    supportsStyle(propertyName, node)
                ];
            }
            else if (Array.isArray(propertyName)) {
                // When property is an array just loop through the names and call `getStyle` recursively
                value = propertyName.reduce(function(prevProperties, name) {
                    var properties = prevProperties,
                        potentiallyVendorPrefixedName = supportsStyle(name, node);

                    properties[potentiallyVendorPrefixedName] = getStyle(potentiallyVendorPrefixedName, node);

                    return properties;
                }, value);
            }
        }

        return value;
    }

    return getStyle;
});
