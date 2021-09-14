class CreateCartItemTable < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.integer :quantity, null: false
      t.timestamps
    end
    add_index :cart_items, :user_id
    add_index :cart_items, :product_id
  end
end
