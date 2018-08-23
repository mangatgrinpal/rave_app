class Meetup::AttendancesController < ApplicationController
	
	def index
	end

	def create
		
		target_meetup
		if @meetup.attendances.create(user_id:current_user.id)
			render json: {meetups: formatted_data, currentlySelectedMeetup: ActiveModelSerializers::SerializableResource.new(@meetup) }
		else
			render json: @meetup.errors
		end
	end

	def destroy
		@attendance = target_meetup.attendances.find(params[:id])
		@attendance.destroy
		render json: {meetups: formatted_data, currentlySelectedMeetup: ActiveModelSerializers::SerializableResource.new(@meetup) }
	end


	private

	def target_meetup
		@meetup = Meetup.find(params[:meetup_id])
	end

	def formatted_data
		ActiveModel::Serializer::CollectionSerializer.new(@meetup.event.meetups, each_serializer: MeetupSerializer)
	end

end

