class Meetup < ApplicationRecord
	belongs_to :user
	belongs_to :event
end
