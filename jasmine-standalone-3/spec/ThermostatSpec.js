describe('Thermostat', function() {
  var thermostat;
  it('starts with a temperature of 20 degrees', function() {
    var thermostat = new Thermostat();
    expect(thermostat._currentTemperature).toEqual(20)
  });
});
