class StaticPagesController < ApplicationController
	before_action :authenticate_user!, only: [:dashboard]
	def home
		@events = Event.where(location: "San Francisco").first(3)
	end

	def dashboard
		@user = current_user
		
	end

end
