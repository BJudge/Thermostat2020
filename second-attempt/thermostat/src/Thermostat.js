const MINIMUMTEMPERATURE = 10;


class Thermostat {

  constructor() {
    this.temperature = 20;
    this.powersetting = "Eco";

  }
  increaseTemperature() {
    if (this.powersetting === "Inferno") {
      if (this.temperature + 1 > 32) {
        return
      }
    } if (this.powersetting === "Eco") {
      if (this.temperature + 1 > 25) {
        return;
      }
    }
    this.temperature +=1;
  }
  decreaseTemperature() {
    if (this.temperature - 1 < MINIMUMTEMPERATURE) {
      return;
    }
    this.temperature -= 1;
  }
  powermode() {
    if (this.powersetting === "Eco") {
    return this.powersetting = "Inferno";
    }
  }
  reset() {
    this.temperature = 20
  }
  energyyUsage() {
    if(this.temperature < 18) {
      return "Low Energy Usage"
    } if (this.temperature < 25) {
      return "Medium Energy Usage"
    } return "High Energy Usage"
  }
}
