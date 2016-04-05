var expect = require('chai').expect,
    domInfo = require('./');

describe('dom-info', function() {
    it('has all the utility functions as properties', function() {
        expect(domInfo).to.deep.equal({
            getStyle: require('./getStyle')
        });
    });
});
