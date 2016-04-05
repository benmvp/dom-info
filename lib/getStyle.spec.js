var expect = require('chai').expect,
    getStyle = require('./getStyle'),

    DUMMY_NODE = {};

describe('getStyle', function() {
    before(function() {
        // eslint-disable-next-line no-implicit-globals, no-native-reassign
        window = {
            getComputedStyle: function() {
                return {
                    marginTop: '10px',
                    marginBottom: '15px',
                    color: '#ffffff',
                    display: 'flex'
                };
            }
        };
    });

    after(function() {
        // eslint-disable-next-line no-implicit-globals, no-native-reassign
        window = undefined;
    });

    it('is a function', function() {
        expect(getStyle).to.be.a('function');
    });

    describe('when property string is specified', function() {
        it('returns empty string when node `undefined`', function() {
            var value = getStyle(undefined, 'marginTop');

            expect(value).to.equal('');
        });

        it('returns the property value for the node', function() {
            var value = getStyle(DUMMY_NODE, 'marginTop');

            expect(value).to.equal('10px');
        });
    });

    describe('when property array is specified', function() {
        it('returns empty object when node `undefined`', function() {
            var value = getStyle(undefined, ['marginTop', 'marginBottom']);

            expect(value).to.deep.equal({});
        });

        it('returns all the property values for the node as an object lookup', function() {
            var value = getStyle(DUMMY_NODE, ['marginBottom', 'display']);

            expect(value).to.deep.equal({
                marginBottom: '15px',
                display: 'flex'
            });
        });
    });
});
