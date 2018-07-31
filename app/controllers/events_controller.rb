class EventsController < ApplicationController
	before_action :find_event, only: [:show]


	def index
		render json: {events: current_events, isAll: isAll?}
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
		located_events.first(page * 3)
	end

	def isAll?
		current_events.count >= located_events.count ? false : true
	end

	def find_event
		@event = Event.find(params[:id])
	end

	def located_events
		Event.where(location: params[:location])
	end

	def event_params
		params.require(:event).permit(:name, :location, :date, :venue)
	end
end
