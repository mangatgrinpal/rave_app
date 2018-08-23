class Meetup < ApplicationRecord
	validates :name, presence: true, length: { maximum: 50 }
	
	has_many :attendances
	has_many :users, through: :attendances
	belongs_to :event
	belongs_to :creator, class_name: "User"
end
