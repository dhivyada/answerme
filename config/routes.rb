Answerme::Application.routes.draw do
  get '/questions/:id', to: 'Home#index' , :as => 'question'
  post '/questions/:id', to: 'Home#post_answer'
  get '/results/:id', to: 'Home#results'
end
