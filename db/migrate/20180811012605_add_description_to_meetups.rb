class AddDescriptionToMeetups < ActiveRecord::Migration[5.2]
  def change
    add_column :meetups, :description, :text
  end
end
