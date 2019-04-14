require 'pry'

class User < ApplicationRecord
  has_many :microposts
  validates :name, presence: true, uniqueness: {message: "duplicated name"}
  validates :email, presence: true
  after_validation :replace_validation_message

  def replace_validation_message
    binding.pry
  end
end
