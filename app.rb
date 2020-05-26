require 'sinatra/base'
require 'json'
require './lib/thermostat'


class ThermostatApp < Sinatra::Base

  enable :sessions

 get '/' do
   File.read('jasmine-standalone-3/index.html')
 end

 get '/temperature' do
   'Hello Bart Judge'
 end

 post '/temperature' do

 end



 run! if app_file == $0
end
