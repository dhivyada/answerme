class CreateMultipleChoiceQuestions < ActiveRecord::Migration
  def change
    create_table :multiple_choice_questions do |t|
      t.integer :id
      t.string :question
      t.text :options
      t.text :answers

      t.timestamp
    end
  end
end
