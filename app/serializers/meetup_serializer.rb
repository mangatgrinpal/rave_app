class MeetupSerializer < ActiveModel::Serializer
	attributes :id, :name, :description
	belongs_to :user
	

end