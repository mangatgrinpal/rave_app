class MeetupsController < ApplicationController
	

	def index
		
	end

	def create
	end

	def show
		
	end

	private
	def find_meetup
		@meetup = Meetup.find(params[:id])
	end
end
