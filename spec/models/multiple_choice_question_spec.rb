require 'spec_helper'

describe MultipleChoiceQuestion do
  context "Serialize" do
    it "should serialize the passed options" do
      question = MultipleChoiceQuestion.create(question: "question?", options: ["1", "2", "3"])
      question.options.should == ["1", "2", "3"]
    end

    it "should serialize the passed answers" do
      question = MultipleChoiceQuestion.create(question: "question?", answers: {"1" => 2, "2" => 2, "3" => "4"})
      question.answers.should == {"1" => 2, "2" => 2, "3" => "4"}
    end
  end
end
