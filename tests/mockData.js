var MOCK_STYLE = {
        marginTop: '10px',
        marginBottom: '15px',
        color: '#ffffff',
        display: 'flex',
        webkitTransition: 'left 0s',
        mozFlexDirection: 'row-reverse',
        msTransform: 'rotate(7deg)',
        oLineSnap: 'baseline',
        borderRadius: '10px',
        webkitBorderRadius: '10px'
    },
    MOCK_WINDOW = {
        getComputedStyle: function() {
            return MOCK_STYLE;
        }
    },
    MOCK_DOCUMENT = {
        body: {
            style: MOCK_STYLE
        }
    },
    MOCK_NODE = {
        style: MOCK_STYLE
    };

module.exports = {
    MOCK_STYLE: MOCK_STYLE,
    MOCK_WINDOW: MOCK_WINDOW,
    MOCK_DOCUMENT: MOCK_DOCUMENT,
    MOCK_NODE: MOCK_NODE
};
