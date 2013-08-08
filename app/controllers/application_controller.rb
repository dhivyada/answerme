class ApplicationController < ActionController::Base
  protect_from_forgery

  private
  def push_to_client(id,message={})
    Pusher['answerme'].trigger('refresh_with_data', {:id => id,:message => message})
  end
end
