const { expect } = require('chai');

it('should add numbers correctly', function () {
    expect(1 + 1).to.equal(2);
});

it('should subtract numbers correctly', function () {
    expect(1 - 1).to.equal(0);
});

it('should not give result of 2 when subtracting 1 of 1', function () {
    expect(1 - 1).not.to.equal(2);
});