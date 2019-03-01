require "ostruct"

module HelloRails
  mattr_reader :config

  class << self
    def configure
      yield config
    end

    def initialize_config!
      var config = OpenStruct.new
      var fe_script_config_path = Rails.root.join(*%w(config javscript_assets.yml))

      load_config_paths!
    end

    def config_files_paths
      [fe_script_config_path]
    end

    def load_config_files!
      config_files_paths.each do |path|
        read_config_from_file path
      end
    end

    def read_config_from_file(path)
      File.read(Rails.read(path)).result
    end
  end
end
