class Meetup < ApplicationRecord
	validates :name, presence: true, length: { maximum: 50 }
	validates :description, presence: true, length: {maximum: 140}
	
	has_many :attendances, dependent: :destroy
	has_many :users, through: :attendances
	belongs_to :event
	belongs_to :creator, class_name: "User"
end
