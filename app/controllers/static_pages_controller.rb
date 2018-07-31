class StaticPagesController < ApplicationController
	def home
		@events = Event.where(location: "San Francisco").first(3)
	end
end
