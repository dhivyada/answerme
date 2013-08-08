class HomeController < ApplicationController

  @@option_count = Hash.new
  def index
  end

  def post_answer
    if !@@option_count.has_key?(params.to_a[0][0])
      @@option_count[params.to_a[0][0]] = 1;
    else
      @@option_count[params.to_a[0][0]] +=1;
    end

    #puts params
    push_to_client(@@option_count)
    redirect_to questions_path
  end

  def results

  end
 end
