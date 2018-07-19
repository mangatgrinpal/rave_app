class EventsController < ApplicationController
	before_action :find_event, only: [:show]

	def index
		page = params[:page].to_i
		render json: {events: Event.first(page * 3)}
	end

	def show
	end

	def new
	end

	def create
	end

	
	private

		def find_event
			@event = Event.find(params[:id])
		end

		def event_params
			params.require(:event).permit(:name, :location, :date, :venue)
		end
end
