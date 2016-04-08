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

    function _cloneComputedStyles(computedStyles) {
        return Object.keys(computedStyles).reduce(function(prevStyles, key) {
            var styles = prevStyles;

            // The keys in the CSSStyleDeclaration object are both CSS property names (like "marginTop")
            // as well as numeric values pointing to CSS-style property names (like "margin-top"). We
            // only want the former, so we exlcude the numeric ones.
            if (isNaN(+key)) {
                styles[key] = computedStyles[key];
            }

            return styles;
        }, {});
    }

    /**
    * Returns the computed value (or values) of the specified style property (or properties) for the specified DOM node
    * @param {string|string[]} propertyName - the name of the style property (or list of style properties) to retrieve
    * @param {HTMLElement} node - the DOM Node from which to retrieve style info
    * @returns computed value (or values) style properties
    */
    function getStyle(propertyName, node) {
        var propertyIsString = typeof propertyName === 'string',
            value = propertyIsString ? '' : {},
            computedStyles;

        if (node && node !== window) {
            if (propertyIsString) {
                computedStyles = window.getComputedStyle(node, null);

                // When property is a string, just grab the value of the property from the computed style
                // Uses `supportsStyle` to get the vendor-prefixed propertyName when applicable
                value = propertyName
                    ? computedStyles[supportsStyle(propertyName, node)]
                    : _cloneComputedStyles(computedStyles);
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
