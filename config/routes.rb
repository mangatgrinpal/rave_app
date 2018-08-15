Rails.application.routes.draw do
  devise_for :users
	
	
	resources :events do
		resources :meetups
	end

	root 'static_pages#home'
	get '/dashboard', to: 'static_pages#dashboard'
end
