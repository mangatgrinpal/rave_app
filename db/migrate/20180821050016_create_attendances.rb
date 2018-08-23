class CreateAttendances < ActiveRecord::Migration[5.2]
  def change
    create_table :attendances do |t|
      t.boolean :is_creator
      t.integer :user_id
      t.integer :meetup_id

      t.timestamps
    end
  end
end
