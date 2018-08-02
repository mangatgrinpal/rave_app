class AddUserIdToMeetups < ActiveRecord::Migration[5.2]
  def change
    add_column :meetups, :user_id, :integer
    add_index :meetups, :user_id
  end
end
