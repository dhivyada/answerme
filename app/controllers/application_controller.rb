class ApplicationController < ActionController::Base
  protect_from_forgery

  private
  def push_to_client(message={})
    Pusher['answerme'].trigger('refresh_with_data', message)
  end
end
