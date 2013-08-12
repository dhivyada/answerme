class ApplicationController < ActionController::Base
  protect_from_forgery

  private
  def push_to_client(question, channel = "answerme", event = "refresh_with_data")
    Pusher[channel].trigger(event, question)
  end
end
