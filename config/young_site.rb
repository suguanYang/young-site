require 'ostruct'
require 'pry'
require 'json'

module YoungSite
  mattr_reader :config
  class << self
    def initialize_config!
      @@fe_script_config_path = Rails.root.join('fe_builder', 'configs/scriptsAddress.json')
      @@fe_script_filename_path = Rails.root.join('public', 'manifest.json')
      @@config = {}

      load_fe_script_config!
    end

    def load_fe_script_config!
      configs = read_fe_script_file!
      @@config[:fe_script_assets] = configs[Rails.env]
    end

    def read_fe_script_file!
      json_configs = File.read(@@fe_script_config_path)
      JSON.parse(json_configs)
    end
  end
end
