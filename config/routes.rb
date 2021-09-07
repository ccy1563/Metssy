Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    # resources :products, only: [:index, :show, :create]
  end

  root "static_pages#root"
end