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
