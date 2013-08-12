class HomeController < ApplicationController
  def show
    @question = MultipleChoiceQuestion.find(params[:id])
  end

  def post_answer
    @multiple_choice_question = MultipleChoiceQuestion.find(params[:id])
    raise "InvalidOption" unless @multiple_choice_question.options.include? params["option"]
    @multiple_choice_question.answers[params[:option]] ||= 0
    @multiple_choice_question.answers[params[:option]] += 1
    @multiple_choice_question.save!
    push_to_client(@multiple_choice_question.to_json)
    redirect_to question_path(params[:id])
  end
end
