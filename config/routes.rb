Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end

  root "static_pages#root"
end