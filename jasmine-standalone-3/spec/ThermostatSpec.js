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
    expect(thermostat.decrease(1)).toMatch("Temperature Already At Minimum");
  });
  it('has a power saving mode, on by default', function() {
    expect(thermostat._powerSavingMode).toMatch("ON");
  });
  it('will not go above 25 degree when power saving mode is on', function() {
    expect(thermostat.increase(26)).toMatch("Power Saving Mode is on, Temperature cannot exceed 25 degrees");
  });
});
