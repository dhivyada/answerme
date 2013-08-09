class CreateMultipleChoiceQuestions < ActiveRecord::Migration
  def change
    create_table :multiple_choice_questions do |t|
      t.int :id
      t.string :question
      serialize :options

      t.timestamps
    end
  end
end
