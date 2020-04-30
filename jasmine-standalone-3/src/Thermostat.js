"use strict";

const LOWESTTEMPERATURE = 10

var Thermostat = function() {
   this._currentTemperature = 20
   this._powerSavingMode = "ON"
};

Thermostat.prototype.increase = function(number) {
  if (this._powerSavingMode === "ON" && this._currentTemperature + number >= 25) {
    return "Power Saving Mode is on, Temperature cannot exceed 25 degrees";
  }
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
