"use strict";

const LOWESTTEMPERATURE = 10

var Thermostat = function() {
   this._currentTemperature = 20
};

Thermostat.prototype.increase = function(number) {
  this._currentTemperature += number;
}

Thermostat.prototype.decrease = function(number) {
  if (this._currentTemperature <= LOWESTTEMPERATURE) {
    return "Temperature Already At Minimum"
  }
  this._currentTemperature -= number;
}

Thermostat.prototype.minimumTemperature = function() {
  this._currentTemperature = LOWESTTEMPERATURE;
};
