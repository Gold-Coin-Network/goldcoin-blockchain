const goldcoin = require('../../util/goldcoin');

describe('goldcoin', () => {
  it('converts number mojo to goldcoin', () => {
    const result = goldcoin.mojo_to_goldcoin(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to goldcoin', () => {
    const result = goldcoin.mojo_to_goldcoin('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to goldcoin string', () => {
    const result = goldcoin.mojo_to_goldcoin_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to goldcoin string', () => {
    const result = goldcoin.mojo_to_goldcoin_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number goldcoin to mojo', () => {
    const result = goldcoin.goldcoin_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string goldcoin to mojo', () => {
    const result = goldcoin.goldcoin_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = goldcoin.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = goldcoin.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = goldcoin.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = goldcoin.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = goldcoin.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = goldcoin.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
