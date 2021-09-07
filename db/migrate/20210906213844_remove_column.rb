class RemoveColumn < ActiveRecord::Migration[6.1]
  def change
    rename_table :models, :products
  end
end
