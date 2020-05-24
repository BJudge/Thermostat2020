describe('Thermostat', function() {
  var thermostat
  beforeEach(function() {
    thermostat = new Thermostat();
  })
  it('starts at 20 decgrees', function() {
    expect(thermostat.temperature).toBe(20);
  })
  it('can increase temperature', function() {
    thermostat.increaseTemperature();
    expect(thermostat.temperature).toBe(21);
  })
  it('can decrease temperature', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).toBe(19);
  })
  it('will not go below 10 degrees', function() {
    [1,2,3,4,5,6,7,8,9,10].forEach(function(i) {
      thermostat.decreaseTemperature();
    });
    expect(thermostat.temperature).toBe(10);
    thermostat.decreaseTemperature();
    expect(thermostat.temperature).not.toBe(9);
  })
  it('will not go above 25, when power saving mode is on', function() {
    expect(thermostat.powersetting).toEqual('Eco');
    [1,2,3,4,5].forEach(function(i) {
      thermostat.increaseTemperature();
    });
    expect(thermostat.temperature).toBe(25);
    thermostat.increaseTemperature()
    expect(thermostat.temperature).not.toBe(26);
  })
  it('will not go above 32 degrees when power saving mode is off', function() {
    expect(thermostat.powersetting).toBe("Eco");
    thermostat.powermode();
    expect(thermostat.powersetting).toBe("Inferno");
    [1,2,3,4,5,6,7,8,9,10,11,12].forEach(function(i) {
      thermostat.increaseTemperature();
    });
    expect(thermostat.temperature).toBe(32);
    thermostat.increaseTemperature();
    expect(thermostat.temperature).not.toBe(33);
  })
  it('has eco mode on as default', function() {
    expect(thermostat.powersetting).toEqual('Eco');
  })
  it('will reset temperature to 20 degrees', function() {
    thermostat.increaseTemperature();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  })
  it('declares low energy usage when temperature is below 18 degrees', function() {
    [1,2,3].forEach(function(i) {
      thermostat.decreaseTemperature();
    });
    expect(thermostat.energyyUsage()).toEqual("Low Energy Usage");
  })
  it('declares medium energy usage when temperature is between 18 and 25 degrees', function() {
    expect(thermostat.energyyUsage()).toEqual("Medium Energy Usage");
  })
  it('declares high energy usage when temperature is above 25 degrees', function() {
    [1,2,3,4,5,6,7].forEach(function(i) {
      thermostat.increaseTemperature();
    });
    expect(thermostat.energyyUsage()).toEqual("High Energy Usage");
  })
})
