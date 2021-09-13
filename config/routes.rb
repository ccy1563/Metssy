Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resources :users, only: [:index, :show]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :show] do
      resources :reviews, only: [:index, :show, :create, :update, :destroy]
    end
  end
  root "static_pages#root"
end