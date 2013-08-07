class HomeController < ApplicationController
  def post_answer
    Pusher['test_channel'].trigger('my_event', {
        message: 'hello world'
    })
    redirect_to questions_path
  end
 end
