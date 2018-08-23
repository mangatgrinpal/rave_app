Rails.application.routes.draw do
  devise_for :users
	
	
	resources :events do
		resources :meetups
	end

	resources :meetups do
		resources :attendances, controller: "meetup/attendances"
	end

	root 'static_pages#home'
	get '/dashboard', to: 'static_pages#dashboard'
end
