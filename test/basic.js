var expect = require('chai').expect,
  Inherit = require('allex_inheritlowlevellib'),
  Error = require('..')(Inherit.inherit);

describe('Basic test', function () {
  it ('Check for properties on Error instance', function () {
    var err = new Error('MY_CODE', 'My error message');
    expect(err).to.have.property('code', 'MY_CODE');
    expect(err).to.have.property('message', 'My error message');
  });
});
