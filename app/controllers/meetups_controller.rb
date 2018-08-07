class MeetupsController < ApplicationController
	before_action :find_meetup, only: [:show]

	def index
		render json: {meetup: @meetup}
	end

	def create
	end

	private
	def find_meetup
		@meetup = Meetup.find(params[:id])
	end
end
