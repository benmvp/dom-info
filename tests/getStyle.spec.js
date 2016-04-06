/*eslint no-implicit-globals: "off", no-native-reassign: "off"*/

var expect = require('chai').expect,
    getStyle = require('../lib/getStyle'),
    MOCK_DATA = require('./mockData');

describe('getStyle', function() {
    before(function() {
        window = MOCK_DATA.MOCK_WINDOW;
    });

    after(function() {
        window = undefined;
    });

    it('is a function', function() {
        expect(getStyle).to.be.a('function');
    });

    describe('when property string is specified', function() {
        it('returns empty string when node `undefined`', function() {
            var value = getStyle('marginTop');

            expect(value).to.equal('');
        });

        it('returns the property value for the node', function() {
            var value = getStyle('marginTop', MOCK_DATA.MOCK_NODE);

            expect(value).to.equal('10px');
        });

        it('returns the property value for the node when vendor prefixing is needed', function() {
            var value = getStyle('transition', MOCK_DATA.MOCK_NODE);

            expect(value).to.equal('left 0s');
        });
    });

    describe('when property array is specified', function() {
        it('returns empty object when node `undefined`', function() {
            var value = getStyle(['marginTop', 'marginBottom']);

            expect(value).to.deep.equal({});
        });

        it('returns all the property values for the node as an object lookup', function() {
            var value = getStyle(['marginBottom', 'display'], MOCK_DATA.MOCK_NODE);

            expect(value).to.deep.equal({
                marginBottom: '15px',
                display: 'flex'
            });
        });

        it('returns all the property values for the node when vendor prefixing is needed', function() {
            var value = getStyle(['marginBottom', 'display', 'transform', 'borderRadius', 'flexDirection'], MOCK_DATA.MOCK_NODE);

            expect(value).to.deep.equal({
                marginBottom: '15px',
                display: 'flex',
                msTransform: 'rotate(7deg)',
                borderRadius: '10px',
                mozFlexDirection: 'row-reverse'
            });
        });
    });
});
