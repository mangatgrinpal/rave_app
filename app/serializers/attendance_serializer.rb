class AttendanceSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  belongs_to :user
	belongs_to :meetup
end
