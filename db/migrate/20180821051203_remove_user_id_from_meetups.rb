class RemoveUserIdFromMeetups < ActiveRecord::Migration[5.2]
  def change
  	remove_column :meetups, :user_id
  	remove_column :meetups, :attendee_id
  end
end
