class AddEventIdToMeetups < ActiveRecord::Migration[5.2]
  def change
    add_column :meetups, :event_id, :integer
    add_index :meetups, :event_id
  end
end
