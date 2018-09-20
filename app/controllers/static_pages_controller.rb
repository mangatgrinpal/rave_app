class StaticPagesController < ApplicationController
	before_action :authenticate_user!, only: [:dashboard]
	

	def home
		@events = Event.where(location: 'sanFrancisco').first(3)
		@laEvents = Event.where(location: 'losAngeles').first(3)
	end

	def dashboard
		@user = current_user
		@meetups = ActiveModel::Serializer::CollectionSerializer.new(@user.meetups, each_serializer: MeetupSerializer)
		@createdMeetups = ActiveModel::Serializer::CollectionSerializer.new(@user.created_meetups, each_serializer: MeetupSerializer)
		@userEvents = (@user.events + user_created_meetup_events).uniq.sort_by &:date
		
	end

	private

	def user_created_meetup_events
		@user = current_user
		Event.joins(:meetups).where("meetups.creator_id = ?", @user.id)
	end
end
