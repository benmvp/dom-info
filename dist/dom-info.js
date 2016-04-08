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
/**
  @preserve Copyright (c) 2016 Ben Ilegbodu.
  Licensed under the MIT License (MIT).
  See: https://github.com/benmvp/dom-info.
  Adapted from the UIZE JavaScript Framework.
*/
(function(factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define(['./getStyle'], factory);
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('./getStyle'));
    }
    else {
        window.domInfo.getDimensions = factory(window.domInfo.getStyle);
    }
}) (function(getStyle) {
    'use strict';

    var getWidth = getStyle.bind(null, 'width'),
        getHeight = getStyle.bind(null, 'height'),

        MARGIN_PROPERTIES = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
        MARGINS_INFO = {
            width: [MARGIN_PROPERTIES[1], MARGIN_PROPERTIES[3]],
            height: [MARGIN_PROPERTIES[0], MARGIN_PROPERTIES[2]]
        };

    function _getDimensions(node) {
        var width = 0,
            height = 0;

        if (node === window) {
            width = window.innerWidth;
            height = window.innerHeight;
        }
        else if (node) {
            width = node.offsetWidth || parseFloat(getWidth(node)) || 0;
            height = node.offsetHeight || parseFloat(getHeight(node)) || 0;
        }

        return {width: width, height: height};
    }

    /**
    * Gets the computed pixel dimensions for the specified DOM node, including padding, border, and optionally margin
    * @param {HTMLElement} node - the DOM Node from which to retrieve dimensions
    * @param {bool} includeMargins - whether or not to factor in margins into the dimensions
    * @returns {object} Dimensions object where values are numeric pixel values
    */
    function getDimensions(node, includeMargins) {
        var dimensions = _getDimensions(node),
            marginValues;

        if (includeMargins && node !== window) {
            // First grab the 4 margin properties
            marginValues = getStyle(MARGIN_PROPERTIES, node);

            // Loop through width & height margin dimensions
            Object.keys(MARGINS_INFO).forEach(function(dimension) {
                var marginPropertiesForDim = MARGINS_INFO[dimension];

                // And then loop through the properties for that dimension
                marginPropertiesForDim.reduce(function(prevDimensions, marginPropertyName) {
                    var nextDimensions = prevDimensions,

                        // Grab the individual value
                        marginValue = marginValues[marginPropertyName];

                    // Add it to the dimension if it exists
                    nextDimensions[dimension] += (!marginValue || marginValue === 'auto')
                        ? 0
                        : parseFloat(marginValue);

                    return nextDimensions;
                }, dimensions);
            });
        }

        return dimensions;
    }

    return getDimensions;
});
