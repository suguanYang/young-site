require 'pry'

class HomeController < ApplicationController
	def multi_params(*args)
		# binding.pry
	end

  def index
    multi_params length: :length
  end
end
