$(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#powersavingMode').click(function() {
    thermostat.powermode();
    $('#power-saving-status').text(thermostat.powersetting)
    updateTemperature();
  })
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature)
    $('#temperature').attr('class', thermostat.energyUsage());
  }
})
