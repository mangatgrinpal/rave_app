class StaticPagesController < ApplicationController
	def home
		@events = Event.first(4)
	end
end
