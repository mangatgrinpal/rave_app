Rails.application.routes.draw do
  devise_for :users
	resources :static_pages
	resources :events

	root 'static_pages#home'
end
