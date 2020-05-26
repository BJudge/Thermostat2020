

class Thermostat
  attr_reader :temperature, :power_setting

  MINIMUM_TEMPERATURE = 10
  DEFAULT_TEMPERATURE = 20

  def initialize
    @temperature = DEFAULT_TEMPERATURE
    @power_setting = true
  end

  def self.instance
   @thermostat ||= self.new
 end

  def increase(number=1)
    if @power_setting == false && @temperature + number > 32
    return "Temperature cannot go above 32 degree"
  elsif @power_setting == true && @temperature + number > 25
    return 'Power Saving Mode is ON - Temperature cannot go above 25 degree'
  else
    @temperature += number
    end
  end

  def decrease(number=1)
    if @temperature - number < MINIMUM_TEMPERATURE
       'Temperature cannot go below 10 degree'
        else
        @temperature -= number
      end
  end

  def power_saving_mode
    if @power_setting == true
      @power_setting = false
    else
    @power_setting = true
    end
  end

  def reset_temperature
    @temperature = DEFAULT_TEMPERATURE
  end

  def minimum_temperature
    @temperature = MINIMUM_TEMPERATURE
  end

  def energy_setting
    if @temperature < 18
      return "low-usage"
    elsif @temperature <25
      return "medium-usage"
    else
      return "high-usage"
    end

  end

end
