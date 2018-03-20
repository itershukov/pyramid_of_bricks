/**
 * Created by itersh on 19.03.2018.
 */
const {w} = require('../index')
  , {expect} = require('chai');

describe('Check w', function() {
  it('0,0', function() {

    const expectRes = 0;
    const res = w(0, 0);

    expect(res).to.equal(expectRes);
  });
  it('1,0', function() {

    const expectRes = 0.5;
    const res = w(1, 0);

    expect(res).to.equal(expectRes);
  });
  it('1,1', function() {

    const expectRes = 0.5;
    const res = w(1, 1);

    expect(res).to.equal(expectRes);
  });
  it( '2,0', function() {

    const expectRes = 0.75;
    const res = w(2, 0);

    expect(res).to.equal(expectRes);
  });
  it('2,1', function() {

    const expectRes = 1.5;
    const res = w(2, 1);

    expect(res).to.equal(expectRes);
  });

  it('2,2', function() {

    const expectRes = 0.75;
    const res = w(2, 2);

    expect(res).to.equal(expectRes);
  });

  it('3,0', function() {

    const expectRes = 0.875;
    const res = w(3, 0);

    expect(res).to.equal(expectRes);
  });

  it('3,1', function() {

    const expectRes = 2.125;
    const res = w(3, 1);

    expect(res).to.equal(expectRes);
  });

  it('3,2', function() {

    const expectRes = 2.125;
    const res = w(3, 2);

    expect(res).to.equal(expectRes);
  });

  it('3,3', function() {

    const expectRes = 0.875;
    const res = w(3, 3);

    expect(res).to.equal(expectRes);
  });

  it('322,156', function() {

    const expectRes = 306.48749781747574;
    const res = w(322, 156);

    expect(res).to.equal(expectRes);
  });

  it('1322, 556', function() {

    const expectRes = 1112.9999999567847;
    const res = w(1322, 556);
    expect(res).to.equal(expectRes);
  });
});