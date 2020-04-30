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
  if (this._powerSavingMode === "OFF" && this._currentTemperature + number >= 32) {
    return "Power Saving Mode is off, Temperature cannot exceed 32 degrees";
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

Thermostat.prototype.switchPowerMode = function() {
  if (this._powerSavingMode = "ON") {
    return this._powerSavingMode = "OFF";
  }
   return this._powerSavingMode = "ON";
};

Thermostat.prototype.resetTemperature = function() {
  return this._currentTemperature = 20
}
