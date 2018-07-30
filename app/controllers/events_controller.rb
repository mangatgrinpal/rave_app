class EventsController < ApplicationController
	before_action :find_event, only: [:show]


	def index
		render json: {events: current_events, isAll: isAll?, friscoEvents: frisco_events}
	end

	def show
	end

	def new
	end

	def create
	end

	
	private

	def current_events
		page = params[:page].to_i
		Event.first(page * 3)
	end

	def isAll?
		current_events.count >= Event.count ? false : true
	end

	def frisco_events
		Event.where(location:"San Francisco")
	end

	def find_event
		@event = Event.find(params[:id])
	end

	def event_params
		params.require(:event).permit(:name, :location, :date, :venue)
	end
end
