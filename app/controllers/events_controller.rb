class EventsController < ApplicationController
	def index
		page = params[:page].to_i
		render json: {events: Event.first(page * 4)}
	end
end
