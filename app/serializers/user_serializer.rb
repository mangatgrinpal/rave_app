class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :admin
  has_many :attendances
	has_many :meetups, through: :attendances, dependent: :destroy
	has_many :created_meetups, foreign_key: "creator_id", class_name: "Meetup", dependent: :destroy

	has_many :events, through: :meetups
	has_many :events, through: :created_meetups

end
