class HomeController < ApplicationController
  def post_answer
    push_to_client({message: "hello world"})
    redirect_to questions_path
  end
 end
