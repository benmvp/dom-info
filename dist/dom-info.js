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
/**
  @preserve Copyright (c) 2016 Ben Ilegbodu.
  Licensed under the MIT License (MIT).
  See: https://github.com/benmvp/dom-info.
  Adapted from the UIZE JavaScript Framework.
*/
(function(factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define(factory);
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    }
    else {
        window.domInfo.supportsStyle = factory();
    }
})(function() {
    'use strict';

    var VENDOR_PREFIXES = ['webkit', 'ms', 'moz', 'o'],
        styleSupportCache = {};

    function _capFirstChar(str) {
        return str[0].toUpperCase() + str.slice(1);
    }

    /**
    * Returns an array of vendor prefixed CSS property names based on the specified CSS property name
    * @param {string} propertyName - CSS property name for which to get the vendor prefixes
    * @returns {string[]}
    */
    function _getVendorPrefixedProperyNames(propertyName) {
        var propertyNameCap = _capFirstChar(propertyName),
            prefixedPropertyNames = VENDOR_PREFIXES.map(function(vendorPrefix) {
                return vendorPrefix + propertyNameCap;
            });

        // First item in array is the unprefixed version
        return [propertyName].concat(prefixedPropertyNames);
    }

    /**
    * Returns the value of the specified (and potentially prefixed) property on the specified node
    * @param {string} propertyName - Name of the property to get the vendor prefixed property name
    * @param {HTMLElement} node - Node from which to get the vendor prefixed property name
    */
    function _getVendorPrefixedProperty(propertyName, node) {
        var vendorPrefixedPropertyNames = _getVendorPrefixedProperyNames(propertyName),
            nodeStyle = (node || document.body).style,
            index = -1,
            vendorPrefixedPropertyNamesLength = vendorPrefixedPropertyNames.length,
            vendorPrefixedPropertyName,
            returnValue;

        // loop through the prefixed property names (the first is unprefixed)
        // seeing if there is a value defined
        for(; ++index < vendorPrefixedPropertyNamesLength;) {
            vendorPrefixedPropertyName = vendorPrefixedPropertyNames[index];

            // if we find the vendor-prefixed property on the node
            // get the info
            if (vendorPrefixedPropertyName in nodeStyle) {
                returnValue = vendorPrefixedPropertyName;
                break;
            }
        }

        return returnValue;
    }

    /**
    * Returns whether or not the specified CSS property is supported in the current browser
    * @param {string} - the name of the style property for which to test support
    * @param {HTMLElement} node - (optional) the DOM Node from which to test
    * @returns undefined if the CSS property isn't supported, the property name if it is
    */
    function supportsStyle(propertyName, node) {
        var supports = styleSupportCache[propertyName];

        if (supports == null) {
            supports = styleSupportCache[propertyName] = _getVendorPrefixedProperty(propertyName, node);
        }

        return supports;
    }

    return supportsStyle;
});
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

        if (node) {
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
