class StaticPagesController < ApplicationController
	def home
		@events = Event.first(3)
	end
end
