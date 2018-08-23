class MeetupsController < ApplicationController
	before_action :authenticate_user!, except: [:index, :show]
	

	def index
		
	end

	def create
		@meetup = current_user.created_meetups.build(meetup_params)
		@event = Event.find(params[:event_id])
		
		if @meetup.save
			render json: @event.meetups, status: :created
		else
			render json: @meetup.errors, status: :unprocessable_entity
		end
	end

	def show
		

	end

	private

	def meetup_params
		params.require(:meetup).permit(:name, :description).merge({event_id:params[:event_id]})
	end
end
