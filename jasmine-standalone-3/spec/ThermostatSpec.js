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
  it('can decrease the temperature', function() {
    thermostat.decrease(1);
    expect(thermostat._currentTemperature).toEqual(19);
  });
  it('has a minimum temperature of 10 degrees', function() {
    thermostat.minimumTemperature();
    expect(thermostat._currentTemperature).toEqual(10);
  });
  it('will not allow you to go below 10 degrees', function() {
    thermostat.minimumTemperature();
    expect(thermostat.decrease(1)).toEqual("Temperature Already At Minimum");
  });
});
