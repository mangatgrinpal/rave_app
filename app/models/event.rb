class Event < ApplicationRecord
	has_many :meetups

	validates :name, presence: true
	validates :location, presence: true
	validates :venue, presence: true
	validates :date, presence: true
end
