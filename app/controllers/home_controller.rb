class HomeController < ApplicationController

  @@question_result=Hash.new

  def post_answer
    if !@@question_result.has_key?(params[:id])
        @@question_result[params[:id]] = Hash.new
    end

    option_count= @@question_result[params[:id]]
    if !option_count.has_key?(params["option"])
      option_count[params["option"]] = 1;
    else
      option_count[params["option"]] +=1;
    end

    @@question_result[params[:id]] = option_count

    push_to_client(params[:id],@@question_result[params[:id]])
    redirect_to question_path(params[:id])
  end

  def results

  end
end
