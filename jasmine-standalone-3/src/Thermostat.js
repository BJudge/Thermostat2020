var Thermostat = function() {
   this._currentTemperature = 20
};

Thermostat.prototype.increase = function(number) {
  this._currentTemperature += number;
}
