require 'pry'

module ApplicationHelper
  def include_webpack_tag(app, options = {})
    sources = read_javascript_source_from_manifest app
    tags = sources.reverse.map do |source|
      javascript_include_tag(source, options)
    end
    tags.join('<BR>')
  end

  def webpack_manifest_file_path(app_name)
    Rails.root.join('public/', "manifest-#{app_name}.json")
  end

  def read_javascript_source_from_manifest(app_name)
    manifest_includes_files = get_all_files_from_manifest(get_manifest_file!(app_name))

    fe_script_assets_config = YoungSite.config[:fe_script_assets]
    manifest_includes_files.map do |file_name|
      "#{fe_script_assets_config['host']}:#{fe_script_assets_config['port']}#{fe_script_assets_config['path']}#{file_name}" 
    end
  end

  def get_manifest_file!(app_name)
    manifest_file = File.read webpack_manifest_file_path(app_name)
    JSON.parse manifest_file
  end

  def get_all_files_from_manifest(manifest)
    manifest.keys.map do |file|
      manifest[file]
    end
  end
end
