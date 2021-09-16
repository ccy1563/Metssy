class AddingBackIndexOnCat < ActiveRecord::Migration[6.1]
  def change
    add_index :cart_items, [:product_id, :user_id], unique: true
  end
end
