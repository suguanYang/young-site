require "pry"

module ApplicationHelper
  def include_webpack_file(app)
    javascript_include_tag read_path_from_manifest app
  end

  def webpack_manifest_file_path
    Rails.root.join('public/', 'manifest-fe-manifest.json')
  end

  def read_path_from_manifest(app_name)
    manifest_file = File.read webpack_manifest_file_path
    manifest = JSON.parse(manifest_file)
    YoungSite.config.fe_script_assets[app_name].host + YoungSite.config.fe_script_assets.path + manifest[app_name]
  end

  def length_utf_8 text
    text.to_s.unpack("U*").inject(0){|n, c| n += (c < 127 ? 0.5 : 1);  n}.ceil
  end
end
