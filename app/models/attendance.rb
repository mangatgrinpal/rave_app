class Attendance < ApplicationRecord
	belongs_to :user
	belongs_to :meetup, dependent: :destroy
end
