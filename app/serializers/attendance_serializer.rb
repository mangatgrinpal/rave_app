class AttendanceSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user
	belongs_to :meetup
end
