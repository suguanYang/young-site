module ApplicationHelper
	def include_webpack_file
		if File.exsit? webpack_manifest_file_path
			
		end
	end

	private
	def webpack_manifest_file_path
		Rails.root.join("public/", "manifest-fe-manifest.json")
	end
end
