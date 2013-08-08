class HomeController < ApplicationController

  @@question_result=Hash.new
  def index
  end


  def post_answer

    if !@@question_result.has_key?(params[:id])
        @@question_result[params[:id]] = Hash.new
    end

    option_count= @@question_result[params[:id]]
    if !option_count.has_key?(params.to_a[0][0])
      option_count[params.to_a[0][0]] = 1;
    else
      option_count[params.to_a[0][0]] +=1;
    end

    @@question_result[params[:id]] = option_count

    push_to_client(params[:id],@@question_result[params[:id]])
    redirect_to question_path(params[:id])
  end

  def results

  end
end
