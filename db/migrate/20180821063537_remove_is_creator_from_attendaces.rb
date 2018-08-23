class RemoveIsCreatorFromAttendaces < ActiveRecord::Migration[5.2]
  def change
  	remove_column :attendances, :is_creator
  end
end
