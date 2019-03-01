require 'ostruct'
require 'pry'

module HelloRails
  mattr_reader :config

  class << self
    def configure
      yield config
    end

    def initialize_config!
      @@config = OpenStruct.new
      @@fe_script_config_path = Rails.root.join('config', 'fe_script_assets.yml')
      load_config_files!
    end

    def config_files_paths
      [@@fe_script_config_path]
    end

    def load_config_files!
      config_files_paths.each do |path|
        read_env_config_from_file path
      end
    end

    def read_env_config_from_file(path)
      yaml = File.read(path)
      origin_config = YAML.safe_load(yaml)
      config_group = origin_config.keys.first
      env_configs = origin_config[config_group][Rails.env]
      config[config_group] = env_configs
      binding.pry
    end
  end
end
