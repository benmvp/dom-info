/*eslint no-implicit-globals: "off", no-native-reassign: "off"*/

var expect = require('chai').expect,
    getDimensions = require('../lib/getDimensions'),

    MOCK_DATA = require('./mockData'),

    MOCK_NODE_A = {
        style: {
            width: '50.5px',
            height: '25.6px',
            marginTop: '11px',
            marginBottom: '32px',
            marginLeft: '100.3px'
        }
    },
    MOCK_NODE_B = {
        style: {
            marginRight: '44px',
            marginBottom: '75px'
        }
    };

describe('getDimensions', function() {
    before(function() {
        window = MOCK_DATA.MOCK_WINDOW;
    });

    after(function() {
        window = null;
    });

    it('is a function', function() {
        expect(getDimensions).to.be.a('function');
    });

    it('returns 0 dimensions when no node is passed', function() {
        expect(getDimensions()).to.deep.equal({width: 0, height: 0});
    });

    describe('when node is a normal node', function() {

        describe('when `includeMargins` is not passed', function() {
            it('retrieves the dimensions from offset properties', function() {
                var dimensions = getDimensions(MOCK_DATA.MOCK_NODE);

                expect(dimensions).to.deep.equal({width: 123, height: 456});
            });

            it('retrieves the dimensions from computed style', function() {
                var dimensions = getDimensions(MOCK_NODE_A);

                expect(dimensions).to.deep.equal({width: 50.5, height: 25.6});
            });

            it('retrieves no dimensions when no offset properties or computed style', function() {
                var dimensions = getDimensions(MOCK_NODE_B);

                expect(dimensions).to.deep.equal({width: 0, height: 0});
            });

        });

        describe('when `includeMargins` is `true`', function() {
            it('returns dimensions when all margins are provided', function() {
                var dimensions = getDimensions(MOCK_DATA.MOCK_NODE, true);

                expect(dimensions).to.deep.equal({width: 146, height: 481});
            });

            it('returns dimensions when only 3 margin properties are provided', function() {
                var dimensions = getDimensions(MOCK_NODE_A, true);

                expect(dimensions).to.deep.equal({width: 150.8, height: 68.6});
            });

            it('returns dimensions when only 2 margin properties are provided (1 of each dimension)', function() {
                var dimensions = getDimensions(MOCK_NODE_B, true);

                expect(dimensions).to.deep.equal({width: 44, height: 75});
            });

            it('returns dimensions when only 2 margin properties are provided (same dimension)', function() {
                var dimensions = getDimensions({
                    style: {
                        width: '35px',
                        height: '190px',
                        marginTop: '5px',
                        marginBottom: '10px'
                    }
                }, true);

                expect(dimensions).to.deep.equal({width: 35, height: 205});
            });

            it('returns dimensions when only 1 margin property is provided', function() {
                var dimensions = getDimensions({
                    style: {
                        width: '123px',
                        height: '987px',
                        marginLeft: '5px'
                    }
                }, true);

                expect(dimensions).to.deep.equal({width: 128, height: 987});
            });

            it('returns dimensions when 0 margin properties are provided', function() {
                var dimensions = getDimensions({
                    style: {
                        width: '444px',
                        height: '6px'
                    }
                }, true);

                expect(dimensions).to.deep.equal({width: 444, height: 6});
            });

            it('returns dimensions when margin properties are provided "auto"', function() {
                var dimensions = getDimensions({
                    style: {
                        width: '857px',
                        height: '44px',
                        marginLeft: 'auto',
                        marginTop: 'auto'
                    }
                }, true);

                expect(dimensions).to.deep.equal({width: 857, height: 44});
            });
        });
    });

    describe('when node is the window', function() {
        it('retrieves the dimensions when `includeMargins` not passed', function() {
            var dimensions = getDimensions(MOCK_DATA.MOCK_WINDOW);

            expect(dimensions).to.deep.equal({width: 795, height: 678});
        });

        it('retrieves the dimensions when `includeMargins` if `false`', function() {
            var dimensions = getDimensions(MOCK_DATA.MOCK_WINDOW, false);

            expect(dimensions).to.deep.equal({width: 795, height: 678});
        });

        it('retrieves the dimensions when `includeMargins` if `true`', function() {
            var dimensions = getDimensions(MOCK_DATA.MOCK_WINDOW, true);

            expect(dimensions).to.deep.equal({width: 795, height: 678});
        });
    });
});
