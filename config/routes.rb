Rails.application.routes.draw do
  devise_for :users
	resources :static_pages
	resources :events do
		resources :meetups
	end

	root 'static_pages#home'
end
