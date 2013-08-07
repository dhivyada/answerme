class HomeController < ApplicationController
  def index
  end

  def post_answer

    push_to_client({yes: 10, no: 2})
    redirect_to questions_path
  end

  def results

  end
 end
