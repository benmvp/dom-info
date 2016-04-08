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
            return node.style;
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
