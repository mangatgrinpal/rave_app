class MeetupSerializer < ActiveModel::Serializer
	attributes :id, :name, :description
	belongs_to :creator, class_name: "User"

	has_many :users, through: :attendances
	has_many :attendances
	

end