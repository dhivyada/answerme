require 'spec_helper'

describe HomeController do
  context "PostAnswerAction" do
    it "should update the answer field" do
      controller.should_receive(:push_to_client).and_return true
      @multiple_answer_question = MultipleChoiceQuestion.create(question: "Question?", options: ["a", "b", "c"], answers: {"a" => 1})
      post :post_answer, id: @multiple_answer_question.id, option: "b"
      @multiple_answer_question.reload.answers["b"].should == 1
    end

    it "should validate the passed option" do
      @multiple_answer_question = MultipleChoiceQuestion.create(question: "Question?", options: ["a", "b", "c"], answers: {"a" => 1})
      expect { post :post_answer, id: @multiple_answer_question.id, option: "d" }.should raise_error
    end
  end
end
