/*eslint no-unused-expressions: "off", no-implicit-globals: "off", no-native-reassign: "off"*/

var expect = require('chai').expect,
    supportsStyle = require('../lib/supportsStyle'),
    MOCK_DATA = require('./mockData');

describe('supportsStyle', function() {
    before(function() {
        document = MOCK_DATA.MOCK_DOCUMENT;
    });

    after(function() {
        document = null;
    });

    it('is a function', function() {
        expect(supportsStyle).to.be.a('function');
    });

    [null, MOCK_DATA.MOCK_NODE].forEach(function(node) {
        describe('when ' + (node ? '' : 'no ') + 'node is passed', function() {
            it('returns `undefined` for CSS property that is not supported', function() {
                expect(supportsStyle('grid', node)).to.be.undefined;
            });

            it('returns back property for non-prefixed CSS property', function() {
                expect(supportsStyle('display', node)).to.equal('display');
            });

            it('returns `webkit` prefixed property', function() {
                expect(supportsStyle('transition', node)).to.equal('webkitTransition');
            });

            it('returns `moz` prefixed property', function() {
                expect(supportsStyle('flexDirection', node)).to.equal('mozFlexDirection');
            });

            it('returns `ms` prefixed property', function() {
                expect(supportsStyle('transform', node)).to.equal('msTransform');
            });

            it('returns `o` prefixed property', function() {
                expect(supportsStyle('lineSnap', node)).to.equal('oLineSnap');
            });

            it('returns back already vendor-prefixed CSS property', function() {
                expect(supportsStyle('mozFlexDirection', node)).to.equal('mozFlexDirection');
            });

            it('prefers unprefixed property over prefixed property', function() {
                expect(supportsStyle('borderRadius', node)).to.equal('borderRadius');
            });

            it('supports CSS property when its value is empty string', function() {
                expect(supportsStyle('padding', node)).to.equal('padding');
            });
        });
    });
});
