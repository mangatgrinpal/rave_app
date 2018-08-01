class AddVenueMapToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :venue_map, :string
  end
end
