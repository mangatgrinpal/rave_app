class RemoveAttendeeIdFromUsers < ActiveRecord::Migration[5.2]
  def change
  	remove_column :users, :attendee_id
  end
end
