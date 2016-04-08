var expect = require('chai').expect,
    domInfo = require('../lib/');

describe('dom-info', function() {
    it('has all the utility functions as properties', function() {
        expect(domInfo).to.deep.equal({
            getDimensions: require('../lib/getDimensions'),
            getStyle: require('../lib/getStyle'),
            supportsStyle: require('../lib/supportsStyle')
        });
    });
});
