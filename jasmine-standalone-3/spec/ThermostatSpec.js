describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  it('starts with a temperature of 20 degrees', function() {
    expect(thermostat._currentTemperature).toEqual(20);
  });
  it('can increase the temperature', function() {
    thermostat.increase(1);
    expect(thermostat._currentTemperature).toEqual(21);
  });
});
