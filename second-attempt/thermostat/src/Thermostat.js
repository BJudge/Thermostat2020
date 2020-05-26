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
  } this.powersetting = "Eco";
  }
  reset() {
    this.temperature = 20
  }
  energyUsage() {
    if(this.temperature < 18) {
      return "low-usage";
    } if (this.temperature < 25) {
      return 'medium-usage';
    } return "high-usage";
  }
}
