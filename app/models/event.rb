class Event < ApplicationRecord
	validates :name, presence: true
	validates :location, presence: true
	validates :venue, presence: true
	validates :date, presence: true
end
