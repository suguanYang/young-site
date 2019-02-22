Rails.application.routes.draw do
  resources :microposts
  resources :users
  get 'home/index'
  resources :articles
  root 'home#index'
end
