"use strict";

var Thermostat = function() {
   this._currentTemperature = 20
};

Thermostat.prototype.increase = function(number) {
  this._currentTemperature += number;
}

Thermostat.prototype.decrease = function(number) {
  this._currentTemperature -= number;
}

Thermostat.prototype.minimumTemperature = function() {
  this._currentTemperature = 10
};
