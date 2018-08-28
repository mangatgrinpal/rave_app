class Attendance < ApplicationRecord
	belongs_to :user, dependent: :destroy
	belongs_to :meetup, dependent: :destroy
end
