var MOCK_STYLE = {
        marginTop: '10px',
        marginBottom: '15px',
        marginLeft: '23px',
        marginRight: '0px',
        color: '#ffffff',
        display: 'flex',
        webkitTransition: 'left 0s',
        mozFlexDirection: 'row-reverse',
        msTransform: 'rotate(7deg)',
        oLineSnap: 'baseline',
        borderRadius: '10px',
        webkitBorderRadius: '10px',
        padding: ''
    },
    MOCK_WINDOW = {
        getComputedStyle: function(node) {
            // Simulate CSSStyleDeclaration

            // first add numeric keys that maps to property names
            var computedStyle = Object.keys(MOCK_STYLE).reduce(function(prevComputedStyle, propertyName, index) {
                var nextComputedStyle = prevComputedStyle;

                nextComputedStyle[index] = propertyName;

                return nextComputedStyle;
            }, {});

            // Then add the actual style properties and their values
            return Object.keys(node.style).reduce(function(prevComputedStyle, propertyName) {
                var nextComputedStyle = prevComputedStyle;

                nextComputedStyle[propertyName] = node.style[propertyName];

                return nextComputedStyle;
            }, computedStyle);
        },
        innerWidth: 795,
        innerHeight: 678
    },
    MOCK_DOCUMENT = {
        body: {
            style: MOCK_STYLE
        }
    },
    MOCK_NODE = {
        style: MOCK_STYLE,
        offsetWidth: 123,
        offsetHeight: 456
    };

module.exports = {
    MOCK_STYLE: MOCK_STYLE,
    MOCK_WINDOW: MOCK_WINDOW,
    MOCK_DOCUMENT: MOCK_DOCUMENT,
    MOCK_NODE: MOCK_NODE
};
