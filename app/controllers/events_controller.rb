class EventsController < ApplicationController
	before_action :find_event, only: [:show]

	def index
		page = params[:page].to_i
		render json: {events: Event.first(page * 4)}
	end

	def show
	end

	
	private

		def find_event
			@event = Event.find(params[:id])
		end

		def event_params
			params.require(:event).permit(:name, :location)
		end
end
