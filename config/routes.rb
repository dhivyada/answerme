Answerme::Application.routes.draw do
  get 'questions', to: 'Home#index'
  post 'questions', to: 'Home#post_answer'
end
