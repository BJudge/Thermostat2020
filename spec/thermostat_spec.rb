require'./lib/thermostat.rb'

describe 'Thermostat' do
  before :each do
    @thermostat = Thermostat.new
  end
  it 'is an instance of' do
    expect(@thermostat).to be_instance_of(Thermostat)
  end
  it'should have a default temperature of 20 degrees' do
    expect(@thermostat.temperature).to eq(20)
  end
  it 'can increase its temperature' do
    @thermostat.increase(1)
    expect(@thermostat.temperature).to eq(21)
  end
  it'can decrease its temperature' do
    @thermostat.decrease(1)
    expect(@thermostat.temperature).to eq(19)
  end

  it'has power saving mode on at initialize' do
    expect(@thermostat.power_setting).to be(true)
  end
  it' can turn off power setting' do
    @thermostat.power_saving_mode
    expect(@thermostat.power_setting).to be(false)
  end
  it('can reset its temperature to 20') do
    @thermostat.increase(4)
    expect(@thermostat.temperature).to eq(24)
    @thermostat.reset_temperature
    expect(@thermostat.temperature).to eq(20)
  end
  it'has a minimum temperature of 10 degrees' do
    @thermostat.minimum_temperature
    expect(@thermostat.temperature).to eq(10)
  end
  it' will not go below 10 degrees' do
    expect(@thermostat.decrease(11)).to eq('Temperature cannot go below 10 degree')
    expect(@thermostat.temperature).to eq(20)
  end
  it'will not go above 25 degrees when power saving mode is on' do
    expect(@thermostat.increase(6)).to eq('Power Saving Mode is ON - Temperature cannot go above 25 degree')
    expect(@thermostat.temperature).to eq(20)
  end
  it'will not go above 32 degrees when power saving mode is off' do
    @thermostat.power_saving_mode
    expect(@thermostat.increase(33)).to eq("Temperature cannot go above 32 degree")
    expect(@thermostat.temperature).to eq(20)
  end
  it'declares low energy usage' do
    @thermostat.decrease(3)
    expect(@thermostat.energy_setting).to eq('low-usage')
  end
  it'declares medium energy usage' do
    expect(@thermostat.energy_setting).to eq('medium-usage')
  end
  it'declares high energy usage' do
    @thermostat.power_saving_mode
    @thermostat.increase(6)
    expect(@thermostat.energy_setting).to eq('high-usage')
  end
end
