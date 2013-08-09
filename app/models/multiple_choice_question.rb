class MultipleChoiceQuestion < ActiveRecord::Base
  attr_accessible :id, :options, :question

  def initialize(id,question,options)
    @id = id
    @question = question
    @options = options
  end
end
