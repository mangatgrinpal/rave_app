class Meetup < ApplicationRecord
	validates :name, presence: true
	
	belongs_to :user
	belongs_to :event
end
