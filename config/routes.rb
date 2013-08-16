Answerme::Application.routes.draw do
  root to: 'Home#index'
  resources :questions, controller: :home do
    member do
      get :results
      post :post_answer
    end
  end
end
