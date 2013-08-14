class HomeController < ApplicationController
  def new

  end

  def create
    question, options = params[:question], params[:options]
    @multiple_choice_question = MultipleChoiceQuestion.create(question: question, options: options, answers: {})
    render json: @multiple_choice_question
  end

  def show
    @question = MultipleChoiceQuestion.find(params[:id])
  end

  def post_answer
    @multiple_choice_question = MultipleChoiceQuestion.find(params[:id])
    raise "InvalidOption" unless @multiple_choice_question.options.include? params["option"]
    @multiple_choice_question.answers[params[:option]] ||= 0
    @multiple_choice_question.answers[params[:option]] += 1
    @multiple_choice_question.save!
    push_to_client(@multiple_choice_question.to_json, "answerme", "refresh_data_#{@multiple_choice_question.id}")
    redirect_to question_path(params[:id], message:"Hurray! Response submitted!!")
  end

  def results
    @question = MultipleChoiceQuestion.find(params[:id])
  end
end
