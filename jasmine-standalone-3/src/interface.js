'use strict';

$(document).ready(function () {
  var thermostat = new Thermostat ();

   updatedTemperature();

  $('#temperature-up').on('click', function() {
    thermostat.increase(1);
    updatedTemperature();
    })

    $('#temperature-down').on('click', function() {
      thermostat.decrease(1);
      updatedTemperature();
      })


    $('#temperature-reset').on('click', function() {
      thermostat.resetTemperature();
      updatedTemperature();
    })

    $('#powersaving').on('click', function() {
      thermostat.switchPowerMode();
      $('#power-saving-status').text(thermostat._powerSavingMode)
    })

    $.get('http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=a1d0b6c5ded565867e161a6b2ea86d86&units=metric',
      function(data) {
        let roundedTemp = Math.round(data.main.temp);
        $('#location-temperature').text(roundedTemp);
        $('#chance-of-rain').text(data.main.humidity);
      })

      $('#current-city').change(function() {
        var city = $('#current-city').val();
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
          let roundedTemp = Math.round(data.main.temp);
        $('#second-temperature').text(roundedTemp);
        $('#chance-of-rain-second-location').text(data.main.humidity);

        })
      })


    function updatedTemperature() {
      $('#temperature').text(thermostat._currentTemperature);
      $('#temperature').attr('class', thermostat.energySetting());

    }
})
