class MultipleChoiceQuestion < ActiveRecord::Base
  attr_accessible :answers, :options, :question
  serialize :options
  serialize :answers
end
