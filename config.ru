# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'
sass_dir = File.expand_path("./public/src/scss", __FILE__)
run Rails.application
