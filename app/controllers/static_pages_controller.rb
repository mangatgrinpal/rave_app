class StaticPagesController < ApplicationController
	before_action :authenticate_user!, only: [:dashboard]
	def home
		@events = Event.where(location: "San Francisco").first(3)
	end

	def dashboard
		@user = current_user 
		@meetups = ActiveModel::Serializer::CollectionSerializer.new(@user.meetups, each_serializer: MeetupSerializer)
		@createdMeetups = ActiveModel::Serializer::CollectionSerializer.new(@user.created_meetups, each_serializer: MeetupSerializer)
		@userEvents = @user.events.uniq
		
	end

end
